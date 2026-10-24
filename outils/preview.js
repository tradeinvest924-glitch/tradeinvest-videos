const {chromium}=require('playwright');
(async()=>{const cfg=require('./'+process.argv[2]);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+__dirname+'/'+(cfg.engine||'engine.html'));await p.evaluate(c=>setup(c),{scenes:cfg.scenes});await p.evaluate(()=>document.fonts.ready);
let t=0;for(let i=0;i<cfg.scenes.length;i++){t+=cfg.scenes[i].dur;await p.evaluate(x=>render(x),t-0.5);await p.screenshot({path:`prev_${cfg.name}_${i+1}.png`});}
await b.close();})();
