const {opt,tag,outro}=require('./kit');
module.exports={name:'j26_sondage',engine:'engine3.html',cover:2.0,scenes:[
{dur:2.6,html:`${tag('SONDAGE')}
<div class="a p h" data-d="0.2" style="font-size:100px">C'est lundi.</div>
<div class="a p h gold" data-d="0.45" style="font-size:92px">Ton budget<br>de la semaine&nbsp;?</div>`},
{dur:4.6,html:`
${opt('A','Calculé au centime',0)}${opt('B','À peu près en tête',0.25)}${opt('C','Je verrai bien',0.5)}
<div class="gap"></div><div class="a m or" data-d="0.9">Vote en commentaire</div>`},
{dur:4.0,html:`
<div class="a m" data-d="0">« Je verrai bien »</div>
<div class="a h" data-d="0.3">finit souvent en</div>
<div class="a h or" data-d="0.6">«&nbsp;mais où est<br>passé mon argent&nbsp;?&nbsp;»</div>`},
{dur:3.8,html:`
<div class="a pill" data-d="0">LA MÉTHODE 5 MIN</div><div class="gap"></div>
<div class="a m" data-d="0.3">Chaque lundi, écris&nbsp;:</div>
<div class="a h gold" data-d="0.6">ce que tu peux<br>dépenser<br>cette semaine.</div><div class="gap2"></div>
<div class="a m" data-d="1.0">Et tiens-toi-y.</div>`},
outro]};
