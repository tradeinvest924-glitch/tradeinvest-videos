const {outroNext}=require('./kit');
const o=outroNext('Prochain Reel : un nouveau quiz');o.cls='c';o.say='Prochain Reel&nbsp;: un nouveau <b>quiz</b>. Abonne-toi&nbsp;!';o.dur=2.8;
module.exports={name:'n17_faq',engine:'engine8p.html',cover:1.0,scenes:[
{dur:2.0,cls:'c',say:'Week-end <b>noir</b> pour le bitcoin&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:86px">Bitcoin sous</div>
<div class="a hx grad" data-d="0" style="font-size:150px;line-height:1.05">62&nbsp;000&nbsp;$</div>
<div class="a s" data-d="0.3">−49&nbsp;% depuis son record</div>`},
{dur:3.0,cls:'c',say:'Et en 24 h, des milliards <b>liquidés</b>.',html:`
<div class="a s" data-d="0">Liquidé en 24 h</div><div class="gap2"></div>
<div class="a glass" data-d="0.2" style="width:880px"><div class="hx grad" style="font-size:110px">1,95&nbsp;Md&nbsp;$</div><div class="s">dont 93&nbsp;% de paris à la hausse</div></div>`},
{dur:3.4,say:'Je t\'explique&nbsp;: c\'est quoi une <b>liquidation</b>&nbsp;?',html:`
<div class="a tag" data-d="0">C'EST QUOI UNE LIQUIDATION&nbsp;?</div><div class="gap"></div>
<div class="a glass" data-d="0.2" style="width:920px"><div class="h" style="font-size:60px">Tu empruntes pour miser<br>plus gros <span class="grad">(le levier)</span>.<br>Le prix va contre toi&nbsp;?<br><span class="grad">La plateforme vend<br>de force.</span></div></div>`},
{dur:2.8,cls:'c',say:'Ma leçon&nbsp;: le levier <b>amplifie</b> tout.',html:`
<div class="a hx" data-d="0" style="font-size:84px">Ces ventes forcées</div>
<div class="a hx grad" data-d="0.3" style="font-size:84px">font encore<br>baisser le prix.</div>
<div class="gap2"></div><div class="a s" data-d="0.7">Effet domino.</div>`},
o]};
