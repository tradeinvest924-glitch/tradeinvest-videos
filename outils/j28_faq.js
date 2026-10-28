const {tag,outro}=require('./kit');
const wave=`<svg class="a p" data-d="0.1" width="760" height="220" viewBox="0 0 760 220"><path data-draw="0.2" data-len="900" d="M10,110 C60,110 80,105 120,110 S200,112 240,108 S320,110 360,110" fill="none" stroke="#C9A84C" stroke-width="9" stroke-linecap="round"/><path data-draw="0.8" data-len="1200" d="M400,110 L430,30 L460,190 L490,50 L520,170 L550,20 L580,200 L610,60 L640,150 L670,40 L700,180 L750,90" fill="none" stroke="#FC8C00" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
module.exports={name:'j28_faq',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.4,html:`${tag('TA QUESTION')}
<div class="a p h" data-d="0.2" style="font-size:100px">C'est quoi</div>
<div class="a p h gold" data-d="0.45" style="font-size:100px">la volatilité&nbsp;?</div>`},
{dur:4.2,html:`${wave}<div class="gap"></div>
<div class="a h" data-d="0.6">À quel point<br>un prix <span class="or">bouge</span>.</div><div class="gap2"></div>
<div class="a m" data-d="1.0"><span class="gold">Calme</span> à gauche, <span class="or">agité</span> à droite.</div>`},
{dur:4.0,html:`
<div class="a pill" data-d="0">EXEMPLES</div><div class="gap"></div>
<div class="a m" data-d="0.3">Obligation d'État solide&nbsp;:<br><span class="gold">volatilité faible</span></div><div class="gap2"></div>
<div class="a m" data-d="0.7">Crypto&nbsp;:<br><span class="or">volatilité très forte</span></div>`},
{dur:4.0,html:`
<div class="a pill" data-d="0">À RETENIR</div><div class="gap"></div>
<div class="a h" data-d="0.3">Plus c'est volatil,</div>
<div class="a h gold" data-d="0.6">plus ça secoue<br>tes émotions.</div><div class="gap2"></div>
<div class="a m" data-d="1.0">Choisis ce que tu peux<br>supporter sans paniquer.</div>`},
{dur:2.6,html:`<div class="a m" data-d="0">Une question sur l'argent&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Pose-la<br>en commentaire</div><div class="gap"></div><div class="a xs" data-d="0.6">Ceci n'est pas un conseil financier.</div>`},
outro]};
