const {opt,countdown,outroNext}=require('./kit');
const O=['Un dividende','Un coupon','Un bonus garanti'];
const o=outroNext('Prochain Reel : un nouveau défi');o.say='Abonne-toi, un nouveau <b>défi</b> arrive&nbsp;!';
module.exports={name:'n05_quiz',engine:'engine8.html',cover:2.0,scenes:[
{dur:2.6,say:'Un mot que les pros utilisent <b>tout le temps</b>…',html:`
<div class="a p h" data-d="0.1" style="font-size:92px">Tu prêtes à un État.</div>
<div class="a p h gold" data-d="0.45" style="font-size:92px">Il te verse quoi&nbsp;?</div>`},
{dur:3.4,say:'Une obligation, c\'est un <b>prêt</b>. Ça rapporte…',html:`
${opt('A',O[0],0)}${opt('B',O[1],0.2)}${opt('C',O[2],0.4)}
<div class="gap2"></div><div class="a m or" data-d="0.8">Réponds en commentaire</div>`},
{dur:2.6,say:'Tu as ta réponse&nbsp;?',html:`<div class="a s" data-d="0">Réponse dans…</div>${countdown(0.2)}`},
{dur:3.2,say:'C\'était la <b>B</b>&nbsp;!',html:`
${opt('A',O[0],0,null,0.4)}${opt('B',O[1],0,0.4)}${opt('C',O[2],0,null,0.4)}
<div class="gap2"></div><div class="a p h gold" data-d="0.6">Réponse B</div>`},
{dur:4.0,say:'Le dividende, c\'est pour les <b>actions</b>.',html:`
<div class="a pill" data-d="0">À RETENIR</div><div class="gap"></div>
<div class="a m" data-d="0.3">Obligation →<br><span class="gold">coupon</span> (des intérêts)</div><div class="gap2"></div>
<div class="a m" data-d="0.7">Action →<br><span class="or">dividende</span> (une part des bénéfices)</div>`},
o]};
