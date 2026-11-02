const {opt,outroNext}=require('./kit');
const O=['La Chine','L\'Italie','La France'];
const o=outroNext('Réponse dans le prochain Reel');o.say='Réponse dans le <b>prochain Reel</b>. Abonne-toi pour la voir&nbsp;!';
module.exports={name:'n02_quiz',engine:'engine8.html',cover:2.0,scenes:[
{dur:2.6,say:'Petite question de <b>culture</b>…',html:`
<div class="a p h" data-d="0.1" style="font-size:92px">Le tout premier<br>billet de banque…</div>
<div class="a p h gold" data-d="0.45" style="font-size:96px">il vient d'où&nbsp;?</div>`},
{dur:3.6,say:'Tu vas peut-être <b>te tromper</b>&nbsp;!',html:`
${opt('A',O[0],0)}${opt('B',O[1],0.2)}${opt('C',O[2],0.4)}
<div class="gap2"></div><div class="a m or" data-d="0.8">Réponds en commentaire</div>`},
{dur:3.6,say:'Indice&nbsp;: c\'était il y a <b>plus de 900 ans</b>.',html:`
<div class="a pill" data-d="0">INDICE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Bien avant<br>l'euro et le dollar…</div><div class="gap2"></div>
<div class="a m gold" data-d="0.7">Tu changes ta réponse&nbsp;?</div>`},
{dur:3.0,say:'Écris <b>A, B ou C</b> en commentaire&nbsp;!',html:`
<div class="a h" data-d="0">A, B ou C&nbsp;?</div><div class="gap"></div>
<div class="a p h or" data-d="0.3">Dis-le<br>en commentaire</div>`},
o]};
