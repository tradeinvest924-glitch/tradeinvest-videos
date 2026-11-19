const {opt,outroNext}=require('./kit');
const O=['Plus de demandes que<br>d\'actions à vendre','Le prix a été<br>multiplié','L\'entrée en Bourse<br>est reportée'];
const o=outroNext('Réponse dans le prochain Reel');o.cls='c';o.say='Réponse dans le <b>prochain Reel</b>. Abonne-toi&nbsp;!';o.dur=2.8;
module.exports={name:'n19_quiz',engine:'engine9.html',cover:1.0,scenes:[
{dur:2.0,cls:'c',say:'Grosse <b>entrée en Bourse</b> ce jeudi&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:78px">Anthropic au Nasdaq</div>
<div class="a hx grad" data-d="0" style="font-size:150px;line-height:1.05">83&nbsp;$</div>
<div class="a s" data-d="0.3">l'action, au-dessus de la<br>fourchette de 70&nbsp;à&nbsp;78&nbsp;$</div>`},
{dur:3.8,say:'L\'offre était <b>sursouscrite</b>. Ça veut dire quoi&nbsp;?',html:`
<div class="a tag" data-d="0">« SURSOUSCRITE », ÇA VEUT DIRE…</div><div class="gap"></div>
${opt('A',O[0],0.2)}${opt('B',O[1],0.35)}${opt('C',O[2],0.5)}`},
{dur:2.6,cls:'c',say:'Écris <b>A, B ou C</b> en commentaire&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:96px">A, B ou C&nbsp;?</div><div class="gap"></div>
<div class="a hx grad" data-d="0.2" style="font-size:80px">Dis-le<br>en commentaire</div>`},
o]};
