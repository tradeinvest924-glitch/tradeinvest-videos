// Shared building blocks for interactive Trade Invest videos (engine3.html)
const opt=(l,t,d,on,off)=>`<div class="a p opt" data-d="${d}"${on!=null?` data-on="${on}"`:''}${off!=null?` data-off="${off}"`:''}><b>${l}</b><span>${t}</span></div>`;
const tag=(t)=>`<div class="a p pill" data-d="0" style="font-size:36px;letter-spacing:4px">${t}</div><div class="gap"></div>`;
const countdown=(start=0.2)=>`<div class="cd">${[3,2,1].map((n,i)=>`<div class="win big" data-win="${start+i*0.8},${start+(i+1)*0.8}" style="font-size:280px;top:0;color:${i==2?'#FC8C00':'#E8C97A'}">${n}</div>`).join('')}</div>`;
const bell=`<svg class="a p" data-d="0" width="150" height="170" viewBox="0 0 170 190"><path d="M85,18 C45,18 30,52 30,88 V128 L12,152 H158 L140,128 V88 C140,52 125,18 85,18 Z" fill="#E8C97A"/><circle cx="85" cy="12" r="10" fill="#E8C97A"/><path d="M63,162 Q85,192 107,162 Z" fill="#C9A84C"/><circle cx="140" cy="40" r="26" fill="#FC8C00"/></svg>`;
const outro={dur:3,html:`${bell}<div class="gap"></div><div class="a p h" data-d="0.25">Abonne-toi</div><div class="a m gold" data-d="0.5">et active les notifs</div><div class="gap"></div><div class="a xs" data-d="0.8">E-book gratuit en bio</div>`};
module.exports={opt,tag,countdown,outro};
