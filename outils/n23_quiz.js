const {opt,outroNext}=require('./kit');
const O=['Le plus bas des<br>30 derniers jours','Le prix<br>de la veille','Un prix choisi<br>par le vendeur'];
const o=outroNext('Réponse dans le prochain Reel');o.say='Réponse dans le <b>prochain Reel</b>. Abonne-toi&nbsp;!';o.dur=2.8;
module.exports={name:'n23_quiz',engine:'engine8.html',cover:1.0,scenes:[
{dur:2.0,say:'Le <b>Black Friday</b> arrive vendredi&nbsp;!',html:`
<div class="a p h" data-d="0" style="font-size:78px">Black Friday</div>
<div class="a p h gold" data-d="0" style="font-size:180px;line-height:1.05;font-weight:800">151&nbsp;€</div>
<div class="a m" data-d="0.3">de budget moyen prévu</div>`},
{dur:3.8,say:'Un prix barré, c\'est par rapport à <b>quel prix</b>&nbsp;?',html:`
<div class="a m" data-d="0">Le prix barré doit être…</div><div class="gap2"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.35)}${opt('C',O[2],0.5)}`},
{dur:2.6,say:'Écris <b>A, B ou C</b> en commentaire&nbsp;!',html:`
<div class="a h" data-d="0">A, B ou C&nbsp;?</div><div class="gap"></div>
<div class="a p h or" data-d="0.2">Dis-le<br>en commentaire</div>`},
o]};
