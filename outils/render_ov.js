const {chromium}=require('playwright');const fs=require('fs');
(async()=>{
 const cfg=require('./'+process.argv[2]);const fps=30;const out=`ov_${cfg.name}`;
 fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out);
 const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
 await p.goto('file://'+__dirname+'/'+cfg.engine);
 const total=await p.evaluate(c=>setup(c),{scenes:cfg.scenes});
 await p.evaluate(()=>document.fonts.ready);
 const n=Math.round(total*fps);
 for(let i=0;i<n;i++){await p.evaluate(t=>render(t),i/fps);await p.screenshot({path:`${out}/f${String(i).padStart(4,'0')}.png`,omitBackground:true});}
 await b.close();console.log(cfg.name,total.toFixed(2),n);
})();
