const {tag,outro}=require('./kit');
const box=`<svg class="a p" data-d="0.2" width="260" height="180" viewBox="0 0 260 180"><rect x="20" y="50" width="220" height="110" rx="22" fill="none" stroke="#C9A84C" stroke-width="8"/><path d="M20,85 H240" stroke="#C9A84C" stroke-width="8"/><rect x="100" y="25" width="60" height="30" rx="10" fill="none" stroke="#FC8C00" stroke-width="7"/></svg>`;
module.exports={name:'j27_defi',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('DÉFI ÉPARGNE')}${box}<div class="gap2"></div>
<div class="a p h" data-d="0.4" style="font-size:100px">Le défi</div>
<div class="a p h gold" data-d="0.6" style="font-size:100px">de la gamelle.</div>`},
{dur:3.8,html:`
<div class="a m" data-d="0">Cette semaine,</div>
<div class="a h gold" data-d="0.3">le midi,<br>tu emportes<br>ton repas.</div><div class="gap2"></div>
<div class="a m" data-d="0.8">Fini le resto ou<br>le sandwich acheté.</div>`},
{dur:4.0,html:`
<div class="a s" data-d="0">Exemple : 12&nbsp;€ le midi dehors,<br>4&nbsp;€ fait maison = 8&nbsp;€ par jour</div><div class="gap"></div>
<div class="a p big" data-d="0.3" style="font-size:220px" data-from="0" data-to="160" data-suf=" €" data-cd="0.4" data-cdur="1.1">0 €</div>
<div class="a s" data-d="1.3">économisés en un mois<br>(5 jours sur 7).</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">L'ASTUCE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Cuisine plus<br>le soir,</div>
<div class="a h gold" data-d="0.6">emporte les restes<br>le lendemain.</div>`},
{dur:3.0,html:`
<div class="a h" data-d="0">Petit geste.</div>
<div class="a h gold" data-d="0.4">Gros résultat.</div>`},
{dur:2.8,html:`<div class="a m" data-d="0">Tu relèves le défi&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Dis-le<br>en commentaire</div>`},
outro]};
