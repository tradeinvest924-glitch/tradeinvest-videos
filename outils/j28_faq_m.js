const {outroNext}=require('./kit');
const wave=`<svg class="a p" data-d="0.1" width="760" height="200" viewBox="0 0 760 220"><path data-draw="0.2" data-len="900" d="M10,110 C60,110 80,105 120,110 S200,112 240,108 S320,110 360,110" fill="none" stroke="#C9A84C" stroke-width="9" stroke-linecap="round"/><path data-draw="0.8" data-len="1200" d="M400,110 L430,30 L460,190 L490,50 L520,170 L550,20 L580,200 L610,60 L640,150 L670,40 L700,180 L750,90" fill="none" stroke="#FC8C00" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const o=outroNext('Demain : un nouveau défi');
o.say='On se retrouve demain&nbsp;!';
module.exports={name:'j28_faq_m',engine:'engine8.html',cover:2.0,scenes:[
{dur:2.6,say:'Salut, moi c\'est le taureau de <b>Trade Invest</b>&nbsp;!',html:`
<div class="a p h" data-d="0.1" style="font-size:96px">Ton placement</div>
<div class="a p h gold" data-d="0.35" style="font-size:96px">fait le yoyo&nbsp;?</div><div class="gap2"></div>
<div class="a m" data-d="0.8">C'est la <span class="or">volatilité</span>.</div>`},
{dur:4.2,say:'C\'est simple : à quel point un prix <b>bouge</b>.',html:`${wave}<div class="gap"></div>
<div class="a h" data-d="0.6"><span class="gold">Calme</span> à gauche,<br><span class="or">agité</span> à droite.</div>`},
{dur:4.0,say:'Obligation d\'État : calme. Crypto : <b>montagnes russes</b>.',html:`
<div class="a pill" data-d="0">EXEMPLES</div><div class="gap"></div>
<div class="a m" data-d="0.3">Obligation d'État solide&nbsp;:<br><span class="gold">volatilité faible</span></div><div class="gap2"></div>
<div class="a m" data-d="0.7">Crypto&nbsp;:<br><span class="or">volatilité très forte</span></div>`},
{dur:4.0,say:'Choisis ce que tu peux supporter <b>sans paniquer</b>.',html:`
<div class="a pill" data-d="0">À RETENIR</div><div class="gap"></div>
<div class="a h" data-d="0.3">Plus c'est volatil,</div>
<div class="a h gold" data-d="0.6">plus ça secoue<br>tes émotions.</div>`},
{dur:2.8,say:'Une question ? Écris-la en <b>commentaire</b>&nbsp;!',html:`<div class="a m" data-d="0">Une question sur l'argent&nbsp;?</div><div class="gap"></div><div class="a p h or" data-d="0.3">Pose-la<br>en commentaire</div><div class="gap"></div><div class="a xs" data-d="0.6">Ceci n'est pas un conseil financier.</div>`},
o]};
