const {opt,countdown,outroNext}=require('./kit');
const O=['Environ 98 €','102 €','Toujours 100 €'];
const o=outroNext('Prochain Reel : un nouveau défi');o.say='Abonne-toi, un nouveau <b>défi</b> arrive&nbsp;!';
module.exports={name:'n11_quiz',engine:'engine8.html',cover:2.0,scenes:[
{dur:2.6,say:'Celle-là piège <b>beaucoup</b> de monde…',html:`
<div class="a p h" data-d="0.1" style="font-size:88px">100&nbsp;€<br>sous le matelas.</div>
<div class="a p h gold" data-d="0.45" style="font-size:88px">Inflation 2&nbsp;% par an.</div>`},
{dur:3.6,say:'Dans 1 an, ils valent <b>combien</b> en vrai&nbsp;?',html:`
<div class="a m" data-d="0">En pouvoir d'achat, dans 1 an&nbsp;:</div><div class="gap2"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.4)}${opt('C',O[2],0.6)}`},
{dur:2.6,say:'Tu as ta réponse&nbsp;?',html:`<div class="a s" data-d="0">Réponse dans…</div>${countdown(0.2)}`},
{dur:3.2,say:'C\'était la <b>A</b>&nbsp;!',html:`
${opt('A',O[0],0,0.4)}${opt('B',O[1],0,null,0.4)}${opt('C',O[2],0,null,0.4)}
<div class="gap2"></div><div class="a p h gold" data-d="0.6">Réponse A</div>`},
{dur:4.2,say:'Le billet ne change pas… mais les <b>prix montent</b>.',html:`
<div class="a pill" data-d="0">À RETENIR</div><div class="gap"></div>
<div class="a m" data-d="0.3">Toujours 100&nbsp;€ sur le billet,</div>
<div class="a m" data-d="0.6">mais tout coûte 2&nbsp;% plus cher.</div><div class="gap2"></div>
<div class="a h gold" data-d="1.0">100 ÷ 1,02 ≈ 98&nbsp;€</div>`},
o]};
