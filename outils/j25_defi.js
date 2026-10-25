const {tag,outro}=require('./kit');
const env=(t,d)=>`<svg class="a p" data-d="${d}" width="200" height="150" viewBox="0 0 200 150" style="margin:0 8px"><rect x="8" y="20" width="184" height="120" rx="12" fill="none" stroke="#C9A84C" stroke-width="7"/><path d="M8,24 L100,85 L192,24" fill="none" stroke="#C9A84C" stroke-width="7" stroke-linejoin="round"/><text x="100" y="128" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="26" fill="#FC8C00">${t}</text></svg>`;
module.exports={name:'j25_defi',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('DÉFI ÉPARGNE')}
<div class="a p h" data-d="0.2" style="font-size:110px">1 semaine</div>
<div class="a p h gold" data-d="0.45" style="font-size:110px">en espèces.</div>`},
{dur:4.0,html:`
<div class="a m" data-d="0">Range ta carte.</div>
<div class="a h gold" data-d="0.3">Retire ton budget<br>de la semaine<br>en billets.</div><div class="gap"></div>
<div class="a s" data-d="0.8">Exemple : 100&nbsp;€ pour 7 jours.</div>`},
{dur:4.0,html:`<div style="display:flex;justify-content:center">${env('COURSES',0.1)}${env('SORTIES',0.3)}${env('DIVERS',0.5)}</div><div class="gap"></div>
<div class="a m" data-d="0.7">Répartis-les<br>dans des enveloppes.</div>
<div class="a h or" data-d="1.0">Enveloppe vide&nbsp;?<br>On ne dépense plus.</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">POURQUOI ÇA MARCHE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Payer en billets,<br>ça se <span class="gold">ressent</span>.</div><div class="gap2"></div>
<div class="a m" data-d="0.7">Payer sans contact,<br>on ne le voit pas passer.</div>`},
{dur:3.0,html:`
<div class="a h" data-d="0">Ce qui reste<br>dimanche soir&nbsp;?</div>
<div class="a h gold" data-d="0.4">Direct<br>sur ton épargne.</div>`},
{dur:2.8,html:`<div class="a m" data-d="0">Tu relèves le défi&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Dis-le<br>en commentaire</div>`},
outro]};
