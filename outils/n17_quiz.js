const {opt,countdown,outroNext}=require('./kit');
const O=['L\'or ne rapporte<br>aucun intérêt','Les mines produisent<br>trop d\'or','Les banques en<br>interdisent l\'achat'];
const o=outroNext('Prochain Reel : un nouveau quiz');o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';o.dur=2.8;
module.exports={name:'n17_quiz',engine:'engine8.html',cover:1.0,scenes:[
{dur:2.0,say:'L\'or <b>dégringole</b>&nbsp;!',html:`
<div class="a p h" data-d="0" style="font-size:84px">L'or sous</div>
<div class="a p h gold" data-d="0" style="font-size:170px;line-height:1.05;font-weight:800">3&nbsp;900&nbsp;$</div>
<div class="a m" data-d="0.3">plus bas depuis octobre 2025</div>`},
{dur:3.6,say:'Les taux montent… et l\'or baisse. <b>Pourquoi</b>&nbsp;?',html:`
<div class="a m" data-d="0">Pourquoi l'or baisse<br>quand les taux montent&nbsp;?</div><div class="gap2"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.35)}${opt('C',O[2],0.5)}`},
{dur:2.2,say:'Tu as ta réponse&nbsp;?',html:`<div class="a s" data-d="0">Réponse dans…</div><div class="gap2"></div><div class="gap2"></div>${countdown(0.1)}`},
{dur:3.8,say:'C\'était la <b>A</b>&nbsp;!',html:`
<div class="a pill" data-d="0">RÉPONSE A</div><div class="gap"></div>
<div class="a m" data-d="0.2">L'or ne verse aucun intérêt.</div><div class="gap2"></div>
<div class="a m" data-d="0.5">Quand les placements à taux<br>rapportent plus, <span class="gold">l'or&nbsp;attire&nbsp;moins.</span></div>`},
o]};
