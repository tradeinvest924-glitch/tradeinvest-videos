const {outroNext}=require('./kit');
const o=outroNext('Prochain Reel : un nouveau quiz');o.cls='c';o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';
module.exports={name:'n04_defi',engine:'engine9.html',cover:2.0,scenes:[
{dur:2.6,cls:'c',say:'Réponse du quiz&nbsp;: <b>A, la Chine</b>&nbsp;!',html:`
<div class="a m" data-d="0">Le tout premier<br>billet de banque&nbsp;?</div><div class="gap2"></div>
<div class="a p hx grad" data-d="0.3" style="font-size:120px">La Chine.</div>
<div class="a s" data-d="0.8">Il y a plus de 900 ans.</div>`},
{dur:3.0,cls:'c',say:'Et maintenant, place au <b>défi</b>&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:96px">Un billet imprévu</div>
<div class="a hx grad" data-d="0.3" style="font-size:96px">tombe du ciel&nbsp;?</div>`},
{dur:3.8,say:'Prime, remboursement, cadeau… <b>la moitié</b> va de côté.',html:`
<div class="a tag" data-d="0">LE DÉFI DE LA MOITIÉ</div><div class="gap"></div>
<div class="a glass" data-d="0.3" style="width:920px"><div class="h" style="font-size:72px">Chaque rentrée<br>d'argent imprévue&nbsp;:<br><span class="grad">50&nbsp;% épargnés.</span></div></div>`},
{dur:3.8,cls:'c',say:'Tu te fais plaisir <b>et</b> tu avances&nbsp;!',html:`
<div class="a s" data-d="0">Exemple : un remboursement de 80&nbsp;€</div><div class="gap2"></div>
<div class="a glass" data-d="0.3" style="width:880px"><div class="hx grad" style="font-size:96px">40&nbsp;€</div><div class="s">sur ton épargne</div></div><div class="gap2"></div>
<div class="a glass" data-d="0.7" style="width:880px"><div class="hx" style="font-size:96px">40&nbsp;€</div><div class="s">pour te faire plaisir</div></div>`},
{dur:3.0,cls:'c',say:'Tu relèves le défi&nbsp;? Dis-le en <b>commentaire</b>&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:90px">Pas de frustration.</div>
<div class="a hx grad" data-d="0.4" style="font-size:90px">Juste du progrès.</div>`},
o]};
