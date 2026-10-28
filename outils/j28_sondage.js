const {opt,tag,outro}=require('./kit');
module.exports={name:'j28_sondage',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('SONDAGE')}
<div class="a p h" data-d="0.2" style="font-size:96px">Ta plus grosse</div>
<div class="a p h gold" data-d="0.45" style="font-size:96px">dépense du mois&nbsp;?</div>`},
{dur:4.8,html:`
${opt('A','Le logement',0)}${opt('B','Voiture et transports',0.25)}${opt('C','Les courses',0.5)}${opt('D','Les loisirs',0.75)}
<div class="gap"></div><div class="a m or" data-d="1.2">Vote en commentaire</div>`},
{dur:4.0,html:`
<div class="a m" data-d="0">Pour beaucoup,</div>
<div class="a h gold" data-d="0.3">c'est le logement.</div><div class="gap2"></div>
<div class="a m" data-d="0.7">Repère souvent cité&nbsp;:<br>pas plus d'<span class="or">un tiers</span><br>de tes revenus.</div>`},
{dur:3.8,html:`
<div class="a pill" data-d="0">TON RÉFLEXE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Commence par<br>optimiser</div>
<div class="a h gold" data-d="0.6">ta plus grosse<br>dépense.</div><div class="gap2"></div>
<div class="a m" data-d="1.0">C'est là que tu gagnes le plus.</div>`},
outro]};
