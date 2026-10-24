const {tag,outro}=require('./kit');
const bell=`<svg class="a p" data-d="0.2" width="200" height="200" viewBox="0 0 200 200"><rect x="30" y="40" width="140" height="120" rx="16" fill="none" stroke="#C9A84C" stroke-width="8"/><path d="M30,75 H170" stroke="#C9A84C" stroke-width="8"/><path data-draw="0.5" data-len="200" d="M60,140 L90,110 L115,125 L150,90" fill="none" stroke="#FC8C00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
module.exports={name:'j24_faq',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('TA QUESTION')}${bell}<div class="gap2"></div>
<div class="a p h" data-d="0.4" style="font-size:100px">C'est quoi</div>
<div class="a p h gold" data-d="0.6" style="font-size:110px">une IPO&nbsp;?</div>`},
{dur:4.0,html:`
<div class="a m" data-d="0">Une <span class="gold">introduction en Bourse</span>.</div><div class="gap"></div>
<div class="a h" data-d="0.4">Une entreprise vend<br>ses actions au public<br><span class="or">pour la 1re fois.</span></div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">POURQUOI&nbsp;?</div><div class="gap"></div>
<div class="a h" data-d="0.3">Pour lever<br>de l'argent</div>
<div class="a h gold" data-d="0.6">et grandir.</div>`},
{dur:4.0,html:`
<div class="a pill" data-d="0">ATTENTION</div><div class="gap"></div>
<div class="a h" data-d="0.3">Les premiers jours,<br>le prix peut<br><span class="or">bouger très fort.</span></div><div class="gap2"></div>
<div class="a m" data-d="0.8">À la hausse<br>comme à la baisse.</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">LE RÉFLEXE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Ne suis pas la hype.</div>
<div class="a h gold" data-d="0.6">Regarde les chiffres<br>de l'entreprise.</div><div class="gap"></div>
<div class="a xs" data-d="1.0">Ceci n'est pas un conseil financier.</div>`},
{dur:2.6,html:`<div class="a m" data-d="0">Une question sur l'argent&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Pose-la<br>en commentaire</div>`},
outro]};
