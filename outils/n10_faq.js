const {outroNext}=require('./kit');
const o=outroNext('Prochain Reel : un nouveau quiz');o.cls='c';o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';
module.exports={name:'n10_faq',engine:'engine9.html',cover:2.0,scenes:[
{dur:2.6,cls:'c',say:'Réponse du quiz&nbsp;: <b>A</b>&nbsp;!',html:`
<div class="a m" data-d="0">ETF, ça veut dire…</div><div class="gap2"></div>
<div class="a hx grad" data-d="0.3" style="font-size:96px">Exchange<br>Traded Fund.</div>`},
{dur:3.6,cls:'c',say:'En français&nbsp;: un fonds <b>coté en Bourse</b>.',html:`
<div class="a tag" data-d="0">EN CLAIR</div><div class="gap"></div>
<div class="a glass" data-d="0.3" style="width:920px"><div class="h" style="font-size:70px">Un <span class="grad">panier</span><br>de plein d'actions,<br>acheté en une fois.</div></div>`},
{dur:3.8,cls:'c',say:'Un ETF suit souvent un <b>indice</b>.',html:`
<div class="a s" data-d="0">Exemple</div><div class="gap2"></div>
<div class="a glass" data-d="0.3" style="width:900px"><div class="hx grad" style="font-size:84px">ETF CAC&nbsp;40</div><div class="s">= les 40 entreprises de l'indice,<br>dans un seul produit</div></div>`},
{dur:4.0,say:'Pourquoi c\'est <b>populaire</b>&nbsp;?',html:`
<div class="a tag" data-d="0">LES ATOUTS</div><div class="gap"></div>
<div class="a glass" data-d="0.3" style="width:920px"><div class="h" style="font-size:56px">Diversifié<br><span class="grad">Frais souvent bas</span><br>S'achète comme&nbsp;une&nbsp;action</div></div>`},
{dur:3.6,cls:'c',say:'Mais ça peut <b>baisser</b> aussi&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:84px">Pas de garantie&nbsp;:</div>
<div class="a hx grad" data-d="0.35" style="font-size:84px">si l'indice baisse,<br>l'ETF baisse.</div>
<div class="gap2"></div><div class="a xs" data-d="0.8">Ceci n'est pas un conseil financier.</div>`},
o]};
