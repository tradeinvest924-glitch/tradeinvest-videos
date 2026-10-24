const {tag,outro}=require('./kit');
const items=['Balade','Pique-nique','Musée gratuit','Soirée jeux'].map((t,i)=>`<div class="a p opt" data-d="${0.3+i*0.2}" style="justify-content:center;font-size:48px">${t}</div>`).join('');
module.exports={name:'j24_defi',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('DÉFI ÉPARGNE')}
<div class="a p h" data-d="0.2" style="font-size:110px">Un week-end</div>
<div class="a p h gold" data-d="0.45" style="font-size:110px">à 0&nbsp;€<br>par mois.</div>`},
{dur:4.2,html:`
<div class="a m" data-d="0">Une fois par mois,<br>que des sorties gratuites&nbsp;:</div><div class="gap2"></div>
${items}`},
{dur:3.8,html:`
<div class="a s" data-d="0">Exemple : un week-end<br>coûte d'habitude 60&nbsp;€</div><div class="gap"></div>
<div class="a p big" data-d="0.3" style="font-size:220px" data-from="0" data-to="720" data-suf=" €" data-cd="0.4" data-cdur="1.2">0 €</div>
<div class="a s" data-d="1.3">économisés en un an.</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">L'ASTUCE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Regarde l'agenda<br>de ta ville.</div><div class="gap2"></div>
<div class="a h gold" data-d="0.7">Plein d'événements<br>sont gratuits.</div>`},
{dur:3.0,html:`
<div class="a h" data-d="0">Les meilleurs<br>souvenirs</div>
<div class="a h gold" data-d="0.4">ne coûtent pas<br>forcément cher.</div>`},
{dur:2.8,html:`<div class="a m" data-d="0">Tu relèves le défi&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Dis-le<br>en commentaire</div>`},
outro]};
