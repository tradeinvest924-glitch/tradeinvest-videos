const {opt,tag}=require('./kit');
module.exports={name:'s25',engine:'story_engine.html',scenes:[
{dur:3,html:`${tag('QUESTION DU JOUR')}
<div class="a h" data-d="0" style="font-size:76px">Pour toi, le placement<br><span class="gold">le plus risqué&nbsp;?</span></div><div class="gap"></div>
${opt('A','L\'immobilier',0)}${opt('B','Les cryptos',0)}${opt('C','Les actions',0)}
<div class="gap"></div>
<div class="a p pill" data-d="0" style="background:#FC8C00;color:#060607;border-color:#FC8C00;font-size:46px">Réponds A, B ou C en DM</div><div class="gap"></div>
<div class="a m" data-d="0">Le quiz du jour arrive à <span class="or">19h</span></div>`}]};
