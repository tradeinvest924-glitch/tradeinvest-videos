const {opt,tag,countdown,outro}=require('./kit');
const O=['Le Livret A','Un ETF Monde','Une seule action'];
module.exports={name:'j25_quiz',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.4,html:`${tag('QUIZ FINANCE')}
<div class="a p h" data-d="0.2" style="font-size:110px">Lequel est</div>
<div class="a p h or" data-d="0.45" style="font-size:110px">le plus risqué&nbsp;?</div>`},
{dur:3.0,html:`
${opt('A',O[0],0)}${opt('B',O[1],0.2)}${opt('C',O[2],0.4)}
<div class="gap"></div><div class="a m or" data-d="0.8">Réponds en commentaire</div>`},
{dur:2.6,html:`<div class="a s" data-d="0">Réponse dans…</div>${countdown(0.2)}`},
{dur:3.4,html:`
${opt('A',O[0],0,null,0.4)}${opt('B',O[1],0,null,0.4)}${opt('C',O[2],0,0.4)}
<div class="gap"></div><div class="a p h gold" data-d="0.6">Réponse C</div>`},
{dur:4.6,html:`
<div class="a pill" data-d="0">L'ÉCHELLE DU RISQUE</div><div class="gap"></div>
<div class="a m" data-d="0.3"><span class="gold">Livret A</span> : capital garanti</div><div class="gap2"></div>
<div class="a m" data-d="0.6"><span class="gold">ETF Monde</span> : des milliers<br>d'entreprises d'un coup</div><div class="gap2"></div>
<div class="a m" data-d="0.9"><span class="or">1 action</span> : tout repose<br>sur une seule entreprise</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">LA LEÇON</div><div class="gap"></div>
<div class="a h" data-d="0.3">Plus de risque,<br>c'est plus de gain<br><span class="gold">possible.</span></div><div class="gap2"></div>
<div class="a m or" data-d="0.8">Jamais garanti.</div>`},
outro]};
