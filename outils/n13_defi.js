const {outroNext}=require('./kit');
const o=outroNext('Prochain Reel : un nouveau quiz');o.cls='c';o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';
module.exports={name:'n13_defi',engine:'engine9.html',cover:2.0,scenes:[
{dur:2.6,cls:'c',say:'Tes <b>centimes</b> peuvent bosser pour toi&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:96px">Ta monnaie</div>
<div class="a hx grad" data-d="0.35" style="font-size:96px">part à la poubelle&nbsp;?</div>`},
{dur:3.6,say:'Chaque achat, tu arrondis à l\'<b>euro du dessus</b>.',html:`
<div class="a tag" data-d="0">LE DÉFI DE L'ARRONDI</div><div class="gap"></div>
<div class="a glass" data-d="0.3" style="width:920px"><div class="h" style="font-size:68px">Tu arrondis<br>chaque achat,<br><span class="grad">la différence<br>va à l'épargne.</span></div></div>`},
{dur:4.2,say:'Exemple sur <b>une journée</b>.',html:`
<div class="a s" data-d="0">Exemple sur une journée</div><div class="gap2"></div>
<div class="a glass" data-d="0.3" style="width:900px"><div class="h" style="font-size:58px">Café 2,30&nbsp;€ → <span class="grad">+0,70&nbsp;€</span><br>Pain 1,15&nbsp;€ → <span class="grad">+0,85&nbsp;€</span><br>Courses 47,60&nbsp;€ → <span class="grad">+0,40&nbsp;€</span></div></div>`},
{dur:3.6,cls:'c',say:'Tu ne sens <b>rien</b>, mais ça s\'additionne&nbsp;!',html:`
<div class="a s" data-d="0">Mis de côté aujourd'hui</div><div class="gap2"></div>
<div class="a glass" data-d="0.3" style="width:880px"><div class="hx grad" style="font-size:120px">1,95&nbsp;€</div><div class="s">sans changer tes habitudes</div></div>
<div class="gap2"></div><div class="a s" data-d="0.8">Astuce : certaines banques<br>proposent l'arrondi automatique.</div>`},
{dur:3.0,cls:'c',say:'Tu relèves le défi&nbsp;? Écris <b>ARRONDI</b>&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:90px">Petits centimes.</div>
<div class="a hx grad" data-d="0.4" style="font-size:90px">Vraie habitude.</div>`},
o]};
