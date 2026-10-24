const {opt,tag}=require('./kit');
module.exports={name:'s24',engine:'story_engine.html',scenes:[
{dur:3,html:`${tag('QUESTION DU JOUR')}
<div class="a h" data-d="0" style="font-size:76px">Ce week-end,<br>tu dépenses combien<br><span class="gold">en sorties&nbsp;?</span></div><div class="gap"></div>
${opt('A','Moins de 30 €',0)}${opt('B','Entre 30 et 80 €',0)}${opt('C','Plus de 80 €',0)}
<div class="gap"></div>
<div class="a p pill" data-d="0" style="background:#FC8C00;color:#060607;border-color:#FC8C00;font-size:46px">Réponds A, B ou C en DM</div><div class="gap"></div>
<div class="a m" data-d="0">Le défi du jour arrive à <span class="or">19h</span></div>`}]};
