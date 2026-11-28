const {tag}=require('./kit');
const row=(a,b,d,c='gold')=>`<div class="a p opt" data-d="${d}" style="justify-content:space-between;font-size:44px"><span style="white-space:nowrap">${a}</span><span class="${c}" style="white-space:nowrap">${b}</span></div>`;
module.exports={name:'pub_cto',engine:'engine3.html',cover:0.5,scenes:[
{dur:2.0,html:`${tag('TA QUESTION')}
<div class="a p h" data-d="0" style="font-size:100px">C'est quoi</div>
<div class="a p h gold" data-d="0" style="font-size:96px">un compte&#8209;titres&nbsp;?</div>`},
{dur:3.0,html:`
<div class="a m" data-d="0">On dit aussi <span class="gold">CTO</span>.</div><div class="gap"></div>
<div class="a h" data-d="0.2">Un compte<br>pour investir<br>en Bourse,<br><span class="or">sans limite.</span></div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">LES PLUS</div><div class="gap"></div>
${row('Marchés','le monde entier',0.2)}${row('Versements','sans plafond',0.45)}${row('Retraits','quand tu veux',0.7)}`},
{dur:3.0,html:`
<div class="a pill" data-d="0">LE MOINS</div><div class="gap"></div>
<div class="a h" data-d="0.2">Tes gains<br>sont <span class="or">imposés</span></div>
<div class="a m" data-d="0.45">dès que tu vends<br>ou touches des dividendes.</div>`},
{dur:4.0,html:`
<div class="a pill" data-d="0">E-BOOK GRATUIT</div><div class="gap"></div>
<div class="a h" data-d="0.2">Apprends à investir<br><span class="gold">pas à pas</span></div><div class="gap"></div>
<div class="a p h or" data-d="0.6" style="font-size:72px">Clique sur le lien</div><div class="gap"></div>
<div class="a xs" data-d="0.9">Ceci n'est pas un conseil financier.</div>`}
]};
