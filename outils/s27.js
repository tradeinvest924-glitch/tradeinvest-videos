const {opt,tag}=require('./kit');
module.exports={name:'s27',engine:'story_engine.html',scenes:[
{dur:3,html:`${tag('QUESTION DU JOUR')}
<div class="a h" data-d="0" style="font-size:72px">Tu connais des<br>investisseurs<br><span class="gold">célèbres&nbsp;?</span></div><div class="gap"></div>
${opt('A','Oui, plusieurs',0)}${opt('B','Un ou deux',0)}${opt('C','Aucun',0)}
<div class="gap"></div>
<div class="a p pill" data-d="0" style="background:#FC8C00;color:#060607;border-color:#FC8C00;font-size:46px">Réponds A, B ou C en DM</div><div class="gap"></div>
<div class="a m" data-d="0">Le quiz du jour arrive à <span class="or">19h</span></div>`}]};
