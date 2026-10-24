const {chromium}=require('playwright');const fs=require('fs');const {execSync}=require('child_process');
(async()=>{
 const cfg=require('./'+process.argv[2]);const fps=30;const out=`frames_${cfg.name}`;
 fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out);
 const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
 await p.goto('file://'+__dirname+'/'+(cfg.engine||'engine.html'));
 const total=await p.evaluate(c=>setup(c),{scenes:cfg.scenes});
 await p.evaluate(()=>document.fonts.ready);
 const n=Math.round(total*fps);
 for(let i=0;i<n;i++){await p.evaluate(t=>render(t),i/fps);await p.screenshot({path:`${out}/f${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:93});}
 // cover = first scene fully revealed
 await p.evaluate(x=>render(x),cfg.cover||2.6);await p.screenshot({path:`cover_${cfg.name}.png`});
 await b.close();
 execSync(`ffmpeg -y -loglevel error -framerate ${fps} -i ${out}/f%04d.jpg -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -movflags +faststart reel_${cfg.name}.mp4`);
 console.log(cfg.name,total.toFixed(1)+'s',n,'frames');
})();
