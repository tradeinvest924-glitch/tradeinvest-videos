const {opt,outroNext}=require('./kit');
const O=['L\'énergie','L\'alimentation','Les services'];
const o=outroNext('Réponse dans le prochain Reel');o.say='Réponse dans le <b>prochain Reel</b>. Abonne-toi&nbsp;!';o.dur=2.8;
module.exports={name:'n14_quiz',engine:'engine8.html',cover:1.0,scenes:[
{dur:2.0,say:'Chiffre officiel de l\'<b>Insee</b>&nbsp;!',html:`
<div class="a p h" data-d="0" style="font-size:84px">Inflation en France</div>
<div class="a p h gold" data-d="0" style="font-size:180px;line-height:1.05;font-weight:800">3,4&nbsp;%</div>
<div class="a m" data-d="0.3">sur un an, en octobre</div>`},
{dur:3.6,say:'Qu\'est-ce qui a le plus <b>augmenté</b>&nbsp;?',html:`
<div class="a m" data-d="0">Sur un an, qu'est-ce qui<br>a le plus augmenté&nbsp;?</div><div class="gap2"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.35)}${opt('C',O[2],0.5)}`},
{dur:2.6,say:'Écris <b>A, B ou C</b> en commentaire&nbsp;!',html:`
<div class="a h" data-d="0">A, B ou C&nbsp;?</div><div class="gap"></div>
<div class="a p h or" data-d="0.2">Dis-le<br>en commentaire</div>`},
o]};
