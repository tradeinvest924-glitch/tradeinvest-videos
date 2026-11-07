const {outroNext}=require('./kit');
const o=outroNext('Prochain Reel : un nouveau quiz');o.cls='c';o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';
module.exports={name:'n07_defi',engine:'engine9.html',cover:2.0,scenes:[
{dur:2.6,cls:'c',say:'Tu commences avec <b>1&nbsp;€</b>. Juste 1&nbsp;€.',html:`
<div class="a hx" data-d="0" style="font-size:96px">1&nbsp;€ cette semaine.</div>
<div class="a hx grad" data-d="0.35" style="font-size:96px">1&nbsp;378&nbsp;€ dans un an.</div>`},
{dur:3.6,say:'Chaque semaine, tu mets <b>1&nbsp;€ de plus</b>.',html:`
<div class="a tag" data-d="0">LE DÉFI DES 52 SEMAINES</div><div class="gap"></div>
<div class="a glass" data-d="0.3" style="width:920px"><div class="h" style="font-size:66px">Semaine 1&nbsp;: <span class="grad">1&nbsp;€</span><br>Semaine 2&nbsp;: <span class="grad">2&nbsp;€</span><br>Semaine 3&nbsp;: <span class="grad">3&nbsp;€</span><br>…<br>Semaine 52&nbsp;: <span class="grad">52&nbsp;€</span></div></div>`},
{dur:3.6,cls:'c',say:'Au début, tu ne sens <b>rien</b> passer.',html:`
<div class="a s" data-d="0">Le premier mois</div><div class="gap2"></div>
<div class="a glass" data-d="0.3" style="width:880px"><div class="s">1 + 2 + 3 + 4 =</div><div class="hx grad" style="font-size:110px">10&nbsp;€</div></div>`},
{dur:3.8,cls:'c',say:'À la fin, ça fait une <b>vraie somme</b>&nbsp;!',html:`
<div class="a s" data-d="0">Après 52 semaines</div><div class="gap2"></div>
<div class="a glass" data-d="0.3" style="width:880px"><div class="hx grad" style="font-size:120px">1&nbsp;378&nbsp;€</div><div class="s">mis de côté, sans y penser</div></div>
<div class="gap2"></div><div class="a s" data-d="0.8">Astuce : programme un virement auto.</div>`},
{dur:3.0,cls:'c',say:'Tu te lances&nbsp;? Écris <b>GO</b> en commentaire&nbsp;!',html:`
<div class="a hx" data-d="0" style="font-size:90px">Petit début.</div>
<div class="a hx grad" data-d="0.4" style="font-size:90px">Grand résultat.</div>`},
o]};
