const {opt,countdown,outroNext}=require('./kit');
const O=['Il baisse<br>à 2&nbsp;%','Il monte à<br>3,2&nbsp;% ou plus','Il reste<br>à 2,5&nbsp;%'];
const o=outroNext('Prochain Reel : un nouveau quiz');o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';o.dur=2.8;
module.exports={name:'n26_quiz',engine:'engine8.html',cover:1.0,scenes:[
{dur:2.0,say:'Le <b>LEP</b> va bouger&nbsp;!',html:`
<div class="a p h" data-d="0" style="font-size:84px">LEP aujourd'hui</div>
<div class="a p h gold" data-d="0" style="font-size:180px;line-height:1.05;font-weight:800">2,5&nbsp;%</div>
<div class="a m" data-d="0.3">inflation&nbsp;: 3,4&nbsp;% en octobre</div>`},
{dur:3.6,say:'Février 2027&nbsp;: <b>hausse ou baisse</b>&nbsp;?',html:`
<div class="a m" data-d="0">Au 1<sup>er</sup> février 2027,<br>le taux du LEP…</div><div class="gap2"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.35)}${opt('C',O[2],0.5)}`},
{dur:2.2,say:'Tu as ta réponse&nbsp;?',html:`<div class="a s" data-d="0">Réponse dans…</div><div class="gap2"></div><div class="gap2"></div>${countdown(0.1)}`},
{dur:4.2,say:'C\'était la <b>B</b>&nbsp;!',html:`
<div class="a pill" data-d="0">RÉPONSE B</div><div class="gap"></div>
<div class="a m" data-d="0.2">Prévision&nbsp;: <span class="gold">3,2&nbsp;% ou plus</span></div><div class="gap2"></div>
<div class="a m" data-d="0.5">Sur 10&nbsp;000&nbsp;€&nbsp;:<br>250&nbsp;€ → <span class="gold">320&nbsp;€/an</span><br>sans impôt</div>`},
o]};
