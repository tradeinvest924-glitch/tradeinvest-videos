const {opt,tag,countdown,outro}=require('./kit');
const O=['Une banque américaine','Une Bourse américaine','Une cryptomonnaie'];
module.exports={name:'j26_quiz',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.4,html:`${tag('QUIZ BOURSE')}
<div class="a p h" data-d="0.2" style="font-size:110px">Le Nasdaq,</div>
<div class="a p h gold" data-d="0.45" style="font-size:110px">c'est quoi&nbsp;?</div>`},
{dur:3.2,html:`
${opt('A',O[0],0)}${opt('B',O[1],0.2)}${opt('C',O[2],0.4)}
<div class="gap"></div><div class="a m or" data-d="0.8">Réponds en commentaire</div>`},
{dur:2.6,html:`<div class="a s" data-d="0">Réponse dans…</div>${countdown(0.2)}`},
{dur:3.4,html:`
${opt('A',O[0],0,null,0.4)}${opt('B',O[1],0,0.4)}${opt('C',O[2],0,null,0.4)}
<div class="gap"></div><div class="a p h gold" data-d="0.6">Réponse B</div>`},
{dur:4.4,html:`
<div class="a m" data-d="0">Une Bourse basée à</div>
<div class="a h gold" data-d="0.3">New York,</div>
<div class="a m" data-d="0.6">où sont cotées beaucoup<br>de géants de la <span class="or">tech</span>.</div><div class="gap"></div>
<div class="a s" data-d="1.0">Le «&nbsp;Nasdaq 100&nbsp;» est aussi<br>un indice : ses 100 plus<br>grandes sociétés (hors finance).</div>`},
{dur:3.4,html:`
<div class="a pill" data-d="0">LA LEÇON</div><div class="gap"></div>
<div class="a h" data-d="0.3">Un même nom<br>peut désigner<br><span class="gold">une Bourse<br>et un indice.</span></div>`},
outro]};
