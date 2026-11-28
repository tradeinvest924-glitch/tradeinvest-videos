const {chromium}=require('playwright');
const v=(n,inner)=>`<html><body style="margin:0;width:1080px;height:1080px;background:#060607;display:flex;align-items:center;justify-content:center;font-family:'Poppins','DejaVu Sans',sans-serif">
<div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 45%,rgba(201,168,76,.28),transparent 62%)"></div>${inner}</body></html>`;
const A=v(1,`<div style="position:relative;width:820px;height:820px;border-radius:50%;border:14px solid #C9A84C;display:flex;align-items:center;justify-content:center;box-shadow:0 0 80px rgba(201,168,76,.35) inset">
<div style="font-size:430px;font-weight:800;letter-spacing:-20px;background:linear-gradient(180deg,#F3D98B,#C9A84C 55%,#9C7A2A);-webkit-background-clip:text;color:transparent;line-height:1">TI</div></div>`);
const B=v(2,`<div style="position:relative;display:flex;flex-direction:column;align-items:center">
<svg width="520" height="300" viewBox="0 0 520 300"><polyline points="20,260 150,170 240,210 370,90 500,30" fill="none" stroke="#C9A84C" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/><polygon points="440,10 515,20 495,95" fill="#FC8C00"/></svg>
<div style="margin-top:40px;font-size:190px;font-weight:800;letter-spacing:-6px;color:#F4F1EA;line-height:1">TI</div></div>`);
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1080}});
for(const [n,h] of [['A',A],['B',B]]){await p.setContent(h);await p.screenshot({path:`photo_profil_${n}.png`});}
await b.close();})();
