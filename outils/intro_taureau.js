const {outroNext}=require('./kit');
const chip=(t,d,on)=>`<span class="a p chip" data-d="${d}" data-on="${on}">${t}</span>`;
const o=outroNext('On avance ensemble');o.say='Abonne-toi, et on avance <b>ensemble</b>&nbsp;!';o.cls='c';
module.exports={name:'intro_taureau',engine:'engine9.html',cover:2.4,scenes:[
{dur:2.6,cls:'c',say:'Pas de panique, je suis là&nbsp;!',html:`
<div class="a p hx" data-d="0.1">La finance,</div>
<div class="a p hx grad" data-d="0.35">c'est compliqué&nbsp;?</div>`},
{dur:3.4,cls:'c',say:'Salut&nbsp;! Moi c\'est le <b>taureau</b> de Trade Invest.',html:`
<div class="a m" data-d="0">Je te présente…</div><div class="gap2"></div>
<div class="a p hx grad" data-d="0.3" style="font-size:110px">le Taureau</div>
<div class="a p h" data-d="0.6">de Trade Invest</div>`},
{dur:3.8,say:'Le taureau, c\'est le symbole de la <b>Bourse qui monte</b>&nbsp;!',html:`
<div class="a tag" data-d="0">POURQUOI UN TAUREAU&nbsp;?</div><div class="gap"></div>
<div class="a glass" data-d="0.3" style="width:920px"><div class="h" style="font-size:72px">En Bourse,<br>un marché qui monte,<br>c'est un <span class="grad">«&nbsp;marché haussier&nbsp;»</span>.</div><div class="gap2"></div><div class="s">En anglais : bull market.<br>Bull = taureau.</div></div>`},
{dur:3.6,say:'Ma mission&nbsp;: rendre la finance <b>simple</b> pour toi.',html:`
<div class="a tag" data-d="0">MA MISSION</div><div class="gap"></div>
<div class="a hx" data-d="0.3" style="font-size:92px">T'aider à</div>
<div class="a hx grad" data-d="0.55" style="font-size:92px">comprendre l'argent,<br>simplement.</div>`},
{dur:4.0,cls:'c',say:'Quiz, défis, sondages… on apprend en <b>s\'amusant</b>&nbsp;!',html:`
<div class="a m" data-d="0">Avec moi, tu auras&nbsp;:</div><div class="gap"></div>
<div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;width:900px">${chip('Des quiz',0.3,0.6)}${chip('Des défis épargne',0.5,0.9)}${chip('Des sondages',0.7,1.2)}${chip('Tes questions',0.9,1.5)}</div>`},
{dur:3.6,cls:'c',say:'Une question&nbsp;? Écris-la en <b>commentaire</b>, j\'y réponds&nbsp;!',html:`
<div class="a m" data-d="0">Bourse, épargne, budget,<br>crypto, ETF…</div><div class="gap"></div>
<div class="a hx grad" data-d="0.4" style="font-size:88px">On décortique tout,<br>ensemble.</div>`},
o]};
