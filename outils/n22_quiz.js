const {opt,countdown,outroNext}=require('./kit');
const O=['L\'inflation et<br>les taux courts','Les bénéfices<br>des banques','Le prix<br>de l\'or'];
const o=outroNext('Prochain Reel : un nouveau quiz');o.cls='c';o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';o.dur=2.8;
module.exports={name:'n22_quiz',engine:'engine9.html',cover:1.0,scenes:[
{dur:2.0,cls:'c',say:'Ton <b>Livret A</b> va-t-il rapporter plus&nbsp;?',html:`
<div class="a hx" data-d="0" style="font-size:86px">Livret A</div>
<div class="a hx grad" data-d="0" style="font-size:170px;line-height:1.05">1,7&nbsp;%</div>
<div class="a s" data-d="0.3">… et bientôt plus&nbsp;?</div>`},
{dur:3.6,say:'Son taux est calculé avec <b>quoi</b>&nbsp;?',html:`
<div class="a tag" data-d="0">LE TAUX DU LIVRET A DÉPEND DE…</div><div class="gap"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.35)}${opt('C',O[2],0.5)}`},
{dur:2.2,cls:'c',say:'Tu as ta réponse&nbsp;?',html:`<div class="a s" data-d="0">Réponse dans…</div><div class="gap2"></div><div class="gap2"></div>${countdown(0.1)}`},
{dur:4.0,cls:'c',say:'C\'était la <b>A</b>&nbsp;!',html:`
<div class="a tag" data-d="0">RÉPONSE A</div><div class="gap"></div>
<div class="a glass" data-d="0.2" style="width:900px"><div class="h" style="font-size:56px">Moyenne de l'inflation<br>et des taux courts<br>sur 6 mois.</div></div><div class="gap2"></div>
<div class="a s" data-d="0.6">Estimations pour le 1er février&nbsp;:<br><span class="grad" style="font-weight:800">2,3 à 2,7&nbsp;%</span></div>`},
o]};
