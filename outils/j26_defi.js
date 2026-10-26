const {tag,outro}=require('./kit');
const mail=(d)=>`<svg class="a p" data-d="${d}" width="150" height="120" viewBox="0 0 150 120" style="margin:0 8px"><rect x="8" y="10" width="134" height="96" rx="10" fill="none" stroke="#C9A84C" stroke-width="7"/><path d="M8,14 L75,64 L142,14" fill="none" stroke="#C9A84C" stroke-width="7"/><path data-draw="${d+0.3}" data-len="200" d="M0,120 L150,0" stroke="#FC8C00" stroke-width="10" stroke-linecap="round"/></svg>`;
module.exports={name:'j26_defi',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('DÉFI ÉPARGNE')}
<div class="a p h" data-d="0.2" style="font-size:110px">Le défi</div>
<div class="a p h gold" data-d="0.45" style="font-size:110px">anti-tentation.</div>`},
{dur:4.0,html:`<div style="display:flex;justify-content:center">${mail(0.1)}${mail(0.3)}${mail(0.5)}</div><div class="gap"></div>
<div class="a m" data-d="0.8">Désabonne-toi de</div>
<div class="a h gold" data-d="1.0">10 newsletters<br>de marques.</div>`},
{dur:3.8,html:`
<div class="a m" data-d="0">Et supprime ta carte</div>
<div class="a h or" data-d="0.3">enregistrée<br>sur les sites d'achat.</div><div class="gap2"></div>
<div class="a m" data-d="0.8">Moins de clics faciles,<br>moins d'achats impulsifs.</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">POURQUOI</div><div class="gap"></div>
<div class="a h" data-d="0.3">Chaque mail promo<br>est fait pour</div>
<div class="a h gold" data-d="0.6">te faire dépenser.</div>`},
{dur:3.0,html:`
<div class="a h" data-d="0">Moins tu vois<br>de promos,</div>
<div class="a h gold" data-d="0.4">moins tu as envie.</div>`},
{dur:2.8,html:`<div class="a m" data-d="0">Tu relèves le défi&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Dis-le<br>en commentaire</div>`},
outro]};
