const {opt,tag}=require('./kit');
module.exports={name:'s26',engine:'story_engine.html',scenes:[
{dur:3,html:`${tag('QUESTION DU JOUR')}
<div class="a h" data-d="0" style="font-size:72px">Combien de mails<br>promo<br><span class="gold">tu reçois par jour&nbsp;?</span></div><div class="gap"></div>
${opt('A','Moins de 5',0)}${opt('B','Entre 5 et 20',0)}${opt('C','Plus de 20',0)}
<div class="gap"></div>
<div class="a p pill" data-d="0" style="background:#FC8C00;color:#060607;border-color:#FC8C00;font-size:46px">Réponds A, B ou C en DM</div><div class="gap"></div>
<div class="a m" data-d="0">Le défi du jour arrive à <span class="or">19h</span></div>`}]};
