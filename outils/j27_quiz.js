const {opt,tag,countdown,outro}=require('./kit');
const O=['Un footballeur','Un investisseur','Le fondateur d\'Apple'];
module.exports={name:'j27_quiz',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.4,html:`${tag('QUIZ CULTURE')}
<div class="a p h" data-d="0.2" style="font-size:96px">Warren Buffett,</div>
<div class="a p h gold" data-d="0.45" style="font-size:110px">c'est qui&nbsp;?</div>`},
{dur:3.2,html:`
${opt('A',O[0],0)}${opt('B',O[1],0.2)}${opt('C',O[2],0.4)}
<div class="gap"></div><div class="a m or" data-d="0.8">Réponds en commentaire</div>`},
{dur:2.6,html:`<div class="a s" data-d="0">Réponse dans…</div>${countdown(0.2)}`},
{dur:3.4,html:`
${opt('A',O[0],0,null,0.4)}${opt('B',O[1],0,0.4)}${opt('C',O[2],0,null,0.4)}
<div class="gap"></div><div class="a p h gold" data-d="0.6">Réponse B</div>`},
{dur:4.4,html:`
<div class="a m" data-d="0">Un investisseur américain,</div>
<div class="a h gold" data-d="0.3">parmi les plus célèbres<br>au monde.</div><div class="gap2"></div>
<div class="a m" data-d="0.7">À la tête de<br><span class="or">Berkshire Hathaway</span><br>pendant des décennies.</div>`},
{dur:3.8,html:`
<div class="a pill" data-d="0">SA LEÇON</div><div class="gap"></div>
<div class="a h" data-d="0.3">Acheter de bonnes<br>entreprises</div>
<div class="a h gold" data-d="0.6">et les garder<br>longtemps.</div><div class="gap2"></div>
<div class="a m or" data-d="1.0">La patience paie.</div>`},
outro]};
