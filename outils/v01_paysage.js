const {tag}=require('./kit');
module.exports={name:'v01_paysage',engine:'engine3bg.html',cover:0.5,scenes:[
{dur:4.58,bg:'bg/v01_1.jpg',html:`${tag('TON ÉPARGNE')}
<div class="a p h" data-d="0" style="font-size:92px">Ton Livret&nbsp;A</div>
<div class="a p h or" data-d="0" style="font-size:92px">perd de la valeur</div>
<div class="a m" data-d="2.2">Je t'explique.</div>`},
{dur:3.84,bg:'bg/v01_2.jpg',html:`
<div class="a pill" data-d="0">LIVRET A</div><div class="gap"></div>
<div class="a p h gold" data-d="0.1" style="font-size:190px;line-height:1.05;font-weight:800">1,7&nbsp;%</div>
<div class="a m" data-d="0.4">par an</div>`},
{dur:4.94,bg:'bg/v01_3.jpg',html:`
<div class="a pill" data-d="0">LES PRIX</div><div class="gap"></div>
<div class="a p h or" data-d="0.1" style="font-size:190px;line-height:1.05;font-weight:800">+2,9&nbsp;%</div>
<div class="a m" data-d="0.4">sur un an, en novembre</div>
<div class="a xs" data-d="0.8">Source&nbsp;: Insee, 27/11/2026</div>`},
{dur:2.74,bg:'bg/v01_4.jpg',html:`
<div class="a h" data-d="0">Ton argent grossit<br><span class="or">moins vite</span><br>que les prix.</div>`},
{dur:4.14,bg:'bg/v01_5.jpg',html:`
<div class="a m" data-d="0">Sur <span class="gold">10&nbsp;000&nbsp;€</span>&nbsp;:</div><div class="gap"></div>
<div class="a p h or" data-d="0.5" style="font-size:170px;line-height:1.05;font-weight:800">−115&nbsp;€</div>
<div class="a m" data-d="0.9">de pouvoir d'achat par an</div>`},
{dur:6.88,bg:'bg/v01_6.jpg',html:`
<div class="a pill" data-d="0">ATTENTION</div><div class="gap"></div>
<div class="a h" data-d="0.2">Le Livret&nbsp;A reste utile<br>pour ton <span class="gold">épargne<br>de précaution</span>.</div><div class="gap"></div>
<div class="a m" data-d="3.3">Pour le long terme&nbsp;:<br><span class="or">regarde ailleurs.</span></div>`},
{dur:5.4,bg:'bg/v01_7.jpg',html:`
<div class="a pill" data-d="0">E-BOOK GRATUIT</div><div class="gap"></div>
<div class="a h" data-d="0.2">Les bases pour<br><span class="gold">bien investir</span></div><div class="gap"></div>
<div class="a p h or" data-d="2.4" style="font-size:84px">Commente EBOOK</div><div class="gap"></div>
<div class="a xs" data-d="2.8">Ceci n'est pas un conseil financier.</div>`}
]};
