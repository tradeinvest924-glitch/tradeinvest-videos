const {outroNext}=require('./kit');
const o=outroNext('Prochain Reel : un nouveau quiz');o.cls='c';o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';o.dur=2.8;
module.exports={name:'n25_faq',engine:'engine9.html',cover:1.0,scenes:[
{dur:2.0,cls:'c',say:'Vendredi, c\'est le <b>Black Friday</b>&nbsp;!',html:`
<div class="a hx grad" data-d="0" style="font-size:200px;line-height:1.05">−50&nbsp;%</div>
<div class="a hx" data-d="0.2" style="font-size:72px">Vraie promo&nbsp;?</div>`},
{dur:3.4,cls:'c',say:'Réponse du quiz&nbsp;: la <b>A</b>&nbsp;!',html:`
<div class="a tag" data-d="0">RÉPONSE DU QUIZ : A</div><div class="gap"></div>
<div class="a glass" data-d="0.2" style="width:920px"><div class="h" style="font-size:58px">Le prix barré =<br><span class="grad">le prix le plus bas<br>des 30 derniers jours.</span></div></div>`},
{dur:3.6,say:'Je t\'explique&nbsp;: c\'est quoi une <b>fausse promo</b>&nbsp;?',html:`
<div class="a tag" data-d="0">C'EST QUOI UNE FAUSSE PROMO&nbsp;?</div><div class="gap"></div>
<div class="a glass" data-d="0.2" style="width:920px"><div class="h" style="font-size:56px">Le prix est gonflé<br>juste avant,<br>puis « baissé ».</div></div><div class="gap2"></div>
<div class="a s" data-d="0.6">Interdit depuis le 28 mai 2022.</div>`},
{dur:2.8,cls:'c',say:'Mon réflexe&nbsp;: <b>noter le prix</b> avant&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:80px">Note le prix</div>
<div class="a hx grad" data-d="0.3" style="font-size:80px">2 semaines avant.</div>`},
o]};
