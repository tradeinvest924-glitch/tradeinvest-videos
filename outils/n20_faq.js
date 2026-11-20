const {outroNext}=require('./kit');
const o=outroNext('Prochain Reel : un nouveau quiz');o.say='Abonne-toi, un nouveau <b>quiz</b> arrive&nbsp;!';o.dur=2.8;
module.exports={name:'n20_faq',engine:'engine8.html',cover:1.0,scenes:[
{dur:2.0,say:'1er jour en Bourse pour <b>Anthropic</b>&nbsp;!',html:`
<div class="a p h" data-d="0" style="font-size:72px">1er jour en Bourse</div>
<div class="a p h gold" data-d="0" style="font-size:180px;line-height:1.05;font-weight:800">+17&nbsp;%</div>
<div class="a m" data-d="0.3">83&nbsp;$ → 97,17&nbsp;$</div>`},
{dur:3.4,say:'Mais attention au <b>piège</b> de l\'ouverture…',html:`
<div class="a m" data-d="0">À l'ouverture, l'action valait</div>
<div class="a p h gold" data-d="0.2" style="font-size:110px">111,50&nbsp;$</div><div class="gap2"></div>
<div class="a m" data-d="0.6">Acheté à ce prix-là&nbsp;?<br><span class="or">−13&nbsp;% le soir même.</span></div>`},
{dur:3.6,say:'Je t\'explique&nbsp;: c\'est quoi le <b>prix d\'introduction</b>&nbsp;?',html:`
<div class="a pill" data-d="0">C'EST QUOI LE PRIX D'INTRODUCTION&nbsp;?</div><div class="gap"></div>
<div class="a m" data-d="0.2">Le prix fixé <span class="gold">avant</span><br>la 1re cotation.</div><div class="gap2"></div>
<div class="a m" data-d="0.5">Il est réservé à ceux<br>qui ont souscrit à l'offre.</div>`},
{dur:2.6,say:'La <b>hype</b> du 1er jour peut coûter cher.',html:`
<div class="a p h" data-d="0" style="font-size:84px">Le 1er jour,</div>
<div class="a p h gold" data-d="0.3" style="font-size:84px">ça peut secouer<br>très fort.</div>`},
o]};
