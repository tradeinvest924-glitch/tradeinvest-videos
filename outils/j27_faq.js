const {tag,outro}=require('./kit');
module.exports={name:'j27_faq',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('TA QUESTION')}
<div class="a p h" data-d="0.2" style="font-size:100px">C'est quoi</div>
<div class="a p h gold" data-d="0.45" style="font-size:110px">le PER&nbsp;?</div>
<div class="a s" data-d="0.8">(pas le ratio, le placement&nbsp;!)</div>`},
{dur:3.8,html:`
<div class="a m" data-d="0">Plan d'Épargne <span class="gold">Retraite</span>.</div><div class="gap"></div>
<div class="a h" data-d="0.3">Tu épargnes<br>aujourd'hui<br>pour <span class="or">ta retraite</span>.</div>`},
{dur:4.0,html:`
<div class="a pill" data-d="0">L'AVANTAGE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Tes versements<br>peuvent réduire</div>
<div class="a h gold" data-d="0.6">ton impôt<br>sur le revenu.</div><div class="gap2"></div>
<div class="a s" data-d="0.9">(dans une certaine limite)</div>`},
{dur:4.0,html:`
<div class="a pill" data-d="0">LA CONTREPARTIE</div><div class="gap"></div>
<div class="a h" data-d="0.3">L'argent est <span class="or">bloqué</span><br>jusqu'à la retraite.</div><div class="gap2"></div>
<div class="a m" data-d="0.7">Sauf cas précis, comme<br>l'achat de ta résidence<br>principale.</div>`},
{dur:3.6,html:`
<div class="a pill" data-d="0">POUR QUI&nbsp;?</div><div class="gap"></div>
<div class="a h" data-d="0.3">Surtout intéressant<br>si tu paies<br><span class="gold">beaucoup d'impôts.</span></div><div class="gap"></div>
<div class="a xs" data-d="0.9">Ceci n'est pas un conseil financier.</div>`},
{dur:2.6,html:`<div class="a m" data-d="0">Une question sur l'argent&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Pose-la<br>en commentaire</div>`},
outro]};
