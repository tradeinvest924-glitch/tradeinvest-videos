const {opt,tag,outro}=require('./kit');
module.exports={name:'j24_sondage',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('SONDAGE')}
<div class="a p h" data-d="0.2" style="font-size:96px">Pour tes choix<br>d'argent,</div>
<div class="a p h gold" data-d="0.45" style="font-size:96px">tu écoutes qui&nbsp;?</div>`},
{dur:4.8,html:`
${opt('A','Mon banquier',0)}${opt('B','Les réseaux sociaux',0.25)}${opt('C','Ma famille',0.5)}${opt('D','Mes propres recherches',0.75)}
<div class="gap"></div><div class="a m or" data-d="1.2">Vote en commentaire</div>`},
{dur:4.0,html:`
<div class="a m" data-d="0">Peu importe la source&nbsp;:</div><div class="gap"></div>
<div class="a h gold" data-d="0.3">vérifie toujours.</div><div class="gap2"></div>
<div class="a m" data-d="0.7">Même ce qu'on te dit ici.</div>`},
{dur:3.8,html:`
<div class="a pill" data-d="0">SIGNAL D'ALERTE</div><div class="gap"></div>
<div class="a h" data-d="0.3">Gains «&nbsp;garantis&nbsp;»,<br>«&nbsp;sans risque&nbsp;»,<br><span class="or">«&nbsp;vite&nbsp;»&nbsp;?</span></div><div class="gap2"></div>
<div class="a h gold" data-d="0.8">Passe ton chemin.</div>`},
outro]};
