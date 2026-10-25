const {tag,outro}=require('./kit');
const row=(a,b,d,c='gold')=>`<div class="a p opt" data-d="${d}" style="justify-content:space-between;font-size:44px"><span style="white-space:nowrap">${a}</span><span class="${c}" style="white-space:nowrap">${b}</span></div>`;
module.exports={name:'j25_faq',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.4,html:`${tag('TA QUESTION')}
<div class="a p h" data-d="0.2" style="font-size:100px">C'est quoi</div>
<div class="a p h gold" data-d="0.45" style="font-size:96px">un compte&#8209;titres&nbsp;?</div>`},
{dur:3.8,html:`
<div class="a m" data-d="0">On dit aussi <span class="gold">CTO</span>.</div><div class="gap"></div>
<div class="a h" data-d="0.3">Un compte<br>pour investir<br>en Bourse,<br><span class="or">sans limite.</span></div>`},
{dur:4.4,html:`
<div class="a pill" data-d="0">LES PLUS</div><div class="gap"></div>
${row('Marchés','le monde entier',0.3)}${row('Versements','sans plafond',0.6)}${row('Retraits','quand tu veux',0.9)}`},
{dur:3.8,html:`
<div class="a pill" data-d="0">LE MOINS</div><div class="gap"></div>
<div class="a h" data-d="0.3">Tes gains<br>sont <span class="or">imposés</span></div>
<div class="a m" data-d="0.6">dès que tu vends<br>ou touches des dividendes.</div>`},
{dur:3.8,html:`
<div class="a pill" data-d="0">PEA OU CTO&nbsp;?</div><div class="gap"></div>
<div class="a h" data-d="0.3">Beaucoup font<br><span class="gold">les deux</span>&nbsp;:</div>
<div class="a m" data-d="0.6">le PEA pour l'Europe,<br>le CTO pour le reste.</div><div class="gap"></div>
<div class="a xs" data-d="0.9">Ceci n'est pas un conseil financier.</div>`},
{dur:2.6,html:`<div class="a m" data-d="0">Une question sur l'argent&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Pose-la<br>en commentaire</div>`},
outro]};
