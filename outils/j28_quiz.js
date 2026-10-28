const {opt,tag,countdown,outro}=require('./kit');
const O=['1 000','1 million','100 millions'];
module.exports={name:'j28_quiz',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.4,html:`${tag('QUIZ CRYPTO')}
<div class="a p h" data-d="0.2" style="font-size:110px">1 bitcoin =</div>
<div class="a p h gold" data-d="0.45" style="font-size:100px">combien de<br>satoshis&nbsp;?</div>`},
{dur:3.2,html:`<div class="a m" data-d="0">Le satoshi, c'est la plus<br>petite unité du bitcoin.</div><div class="gap"></div>
${opt('A',O[0],0.3)}${opt('B',O[1],0.5)}${opt('C',O[2],0.7)}
<div class="gap2"></div><div class="a m or" data-d="1.0">Réponds en commentaire</div>`},
{dur:2.6,html:`<div class="a s" data-d="0">Réponse dans…</div>${countdown(0.2)}`},
{dur:3.4,html:`
${opt('A',O[0],0,null,0.4)}${opt('B',O[1],0,null,0.4)}${opt('C',O[2],0,0.4)}
<div class="gap"></div><div class="a p h gold" data-d="0.6">Réponse C</div>`},
{dur:4.2,html:`
<div class="a m" data-d="0">1 bitcoin =</div>
<div class="a p big or" data-d="0.3" style="font-size:130px">100&nbsp;000&nbsp;000</div>
<div class="a m" data-d="0.6">satoshis.</div><div class="gap"></div>
<div class="a s" data-d="1.0">Le nom vient de Satoshi Nakamoto,<br>le créateur anonyme du bitcoin.</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">LA LEÇON</div><div class="gap"></div>
<div class="a h" data-d="0.3">Pas besoin d'acheter<br>un bitcoin entier.</div>
<div class="a h gold" data-d="0.6">On peut en acheter<br>un petit morceau.</div><div class="gap2"></div>
<div class="a xs" data-d="1.0">Crypto = très volatil. Ceci n'est pas un conseil financier.</div>`},
outro]};
