import numpy as np, sys, wave
SR=44100
def note(m): return 440*2**((m-69)/12)
def env(n,a,r):
    e=np.ones(n); a=int(a*SR); r=int(r*SR)
    if a: e[:a]=np.linspace(0,1,a)
    if r: e[-r:]*=np.linspace(1,0,r)
    return e
def tone(f,d,harm=(1,.5,.25,.12),det=0.0):
    t=np.arange(int(d*SR))/SR; s=0
    for i,h in enumerate(harm):
        s=s+h*np.sin(2*np.pi*f*(i+1)*t)
        if det: s=s+h*np.sin(2*np.pi*f*(i+1)*(1+det)*t)
    return s
def kick(d=0.35):
    t=np.arange(int(d*SR))/SR; f=50+90*np.exp(-t*30)
    return np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-t*9)
def hat(d=0.06,seed=0):
    rng=np.random.default_rng(seed); n=int(d*SR); x=rng.standard_normal(n)
    x=np.diff(np.concatenate([[0],x]))  # crude highpass
    return x*np.exp(-np.arange(n)/SR*60)*0.25
def clap(d=0.2):
    rng=np.random.default_rng(3); n=int(d*SR); x=rng.standard_normal(n)
    return x*np.exp(-np.arange(n)/SR*25)*0.35
def add(out,p,s):
    if p>=len(out): return
    e=min(len(out),p+len(s)); out[p:e]+=s[:e-p]
def gen(dur,mood,seed):
    rng=np.random.default_rng(seed)
    progs={'punchy':[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],
           'calm':[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,65]],
           'warm':[[50,54,57,61],[55,59,62,66],[47,50,54,57],[52,55,59,62]]}
    bpm={'punchy':108,'calm':84,'warm':96}[mood]
    beat=60/bpm; bar=4*beat
    N=int((dur+1)*SR); out=np.zeros(N)
    prog=progs[mood]; tr=int(rng.integers(-2,3))
    nb=int(dur/bar)+2
    for b in range(nb):
        ch=prog[b%4]; st=int(b*bar*SR)
        for m in ch:
            s=tone(note(m+tr),bar,(1,.35,.15),0.003)*env(int(bar*SR),0.25,0.4)*0.07
            add(out,st,s)
        # bass
        for k in range(4 if mood!='calm' else 2):
            d=beat if mood!='calm' else 2*beat
            s=tone(note(ch[0]-12+tr),d*0.9,(1,.3))*env(int(d*0.9*SR),0.01,0.15)*0.22
            p=st+int(k*d*SR); add(out,p,s)
        # arp
        if mood!='calm' or b%2==0:
            step=beat/2
            for k in range(8):
                m=ch[k%len(ch)]+12+tr
                s=tone(note(m),step*0.8,(1,.2))*env(int(step*0.8*SR),0.005,0.1)*0.05
                p=st+int(k*step*SR); add(out,p,s)
        # drums
        for k in range(4):
            p=st+int(k*beat*SR)
            if mood=='calm' and k%2: pass
            else:
                s=kick()*(0.55 if mood!='calm' else 0.35); add(out,p,s)
            if mood!='calm' and k%2==1:
                s=clap(); add(out,p,s)
            for hh in (0,0.5):
                q=p+int(hh*beat*SR); s=hat(seed=k)*(0.5 if mood!='calm' else 0.3); add(out,q,s)
    out=out[:int(dur*SR)]
    # simple reverb-ish echo
    d=int(0.23*SR); w=out.copy(); w[d:]+=0.25*out[:-d]; out=w
    out*=env(len(out),1.0,1.5)
    out=np.tanh(out*1.2); out/=np.max(np.abs(out))+1e-9; out*=0.6
    st=np.stack([out,np.roll(out,int(0.012*SR))],1)
    return (st*32767).astype(np.int16)
if __name__=='__main__':
    dur=float(sys.argv[1]); mood=sys.argv[2]; seed=int(sys.argv[3]); path=sys.argv[4]
    a=gen(dur,mood,seed)
    with wave.open(path,'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(a.tobytes())
