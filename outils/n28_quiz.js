const {opt,countdown,outroNext}=require('./kit');
const O=['Les prix<br>baissent','Les prix montent<br>moins vite','Les salaires<br>augmentent'];
const o=outroNext('Prochain Reel : le 1er décembre');o.cls='c';o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';o.dur=2.8;
module.exports={name:'n28_quiz',engine:'engine9.html',cover:1.0,scenes:[
{dur:2.0,cls:'c',say:'Chiffre officiel de l\'<b>Insee</b>&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:80px">Inflation en France</div>
<div class="a hx grad" data-d="0" style="font-size:200px;line-height:1.05">2,9&nbsp;%</div>
<div class="a s" data-d="0.3">en novembre, contre 3,4&nbsp;% en octobre</div>`},
{dur:3.6,say:'Ça veut dire <b>quoi</b>&nbsp;?',html:`
<div class="a tag" data-d="0">L'INFLATION RALENTIT. DONC…</div><div class="gap"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.35)}${opt('C',O[2],0.5)}`},
{dur:2.2,cls:'c',say:'Tu as ta réponse&nbsp;?',html:`<div class="a s" data-d="0">Réponse dans…</div><div class="gap2"></div><div class="gap2"></div>${countdown(0.1)}`},
{dur:4.2,cls:'c',say:'C\'était la <b>B</b>&nbsp;!',html:`
<div class="a tag" data-d="0">RÉPONSE B&nbsp;: LA DÉSINFLATION</div><div class="gap"></div>
<div class="a glass" data-d="0.2" style="width:900px"><div class="h" style="font-size:56px">Les prix montent<br>toujours, mais<br>moins vite.</div></div><div class="gap2"></div>
<div class="a s" data-d="0.6">Panier de 100&nbsp;€ il y a un an&nbsp;:<br><span class="grad" style="font-weight:800">102,90&nbsp;€ aujourd'hui</span></div>`},
o]};
