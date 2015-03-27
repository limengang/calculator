$(function(){
var currentText='';
var addbox;
var jianbox;
var chengbox;
var chubox;
var numberbox;
var i,box1,box2,box3,box4;
var tipstext='請繼續輸入欲計算的數值';
$('#btn1').on('click',function(){

$('#tips').text('');
currentText=currentText+1
$('#message').text(currentText);
});

$('#btn2').on('click',function(){
$('#tips').text('');
currentText=currentText+2
$('#message').text(currentText);
});

$('#btn3').on('click',function(){
$('#tips').text('');
currentText=currentText+3
$('#message').text(currentText);
});

$('#btn4').on('click',function(){
$('#tips').text('');
currentText=currentText+4
$('#message').text(currentText);
});

$('#btn5').on('click',function(){
$('#tips').text('');
currentText=currentText+5
$('#message').text(currentText);
});

$('#btn6').on('click',function(){
$('#tips').text('');
currentText=currentText+6
$('#message').text(currentText);
});

$('#btn7').on('click',function(){
$('#tips').text('');
currentText=currentText+7
$('#message').text(currentText);
});

$('#btn8').on('click',function(){
$('#tips').text('');
currentText=currentText+8
$('#message').text(currentText);
});

$('#btn9').on('click',function(){
$('#tips').text('');
currentText=currentText+9
$('#message').text(currentText);
});

$('#btn0').on('click',function(){
$('#tips').text('');
currentText=currentText+0
$('#message').text(currentText);
});

$('#btnadd').on('click',function(){
addbox=parseInt(currentText)
$('#tips').text(tipstext);
currentText=''
$('#message').text(currentText);
i=1;
});

$('#btnjian').on('click',function(){
jianbox=parseInt(currentText)
$('#tips').text(tipstext);
currentText=''
$('#message').text(currentText);
i=2;
});

$('#btncheng').on('click',function(){
chengbox=parseInt(currentText)
$('#tips').text(tipstext);
currentText=''
$('#message').text(currentText);
i=3;
});

$('#btnchu').on('click',function(){
chubox=parseInt(currentText)
$('#tips').text(tipstext);
currentText=''
$('#message').text(currentText);
i=4;
});

$('#btndeng').on('click',function(){
$('#tips').text('');
numberbox=parseInt(currentText)

if (i==1) {
	box1=numberbox+addbox;
	alert(box1)
	$('#tips').text(box1);
}
else{
	if (i==2) {
	box2=jianbox-numberbox;
	alert(box2)
	$('#tips').text(box2);
             }
    else{
    	if (i==3) {
	box3=numberbox*chengbox;
	alert(box3)
	$('#tips').text(box3);
                 }
        else{
        	if (i==4) {
	box4=chubox/numberbox;
	alert(box4)
	$('#tips').text(box4);
                     }
        }
    }
}

//$('#message').text(toString(box));
$('#message').text('請點擊“C”鍵以便進行新的運算')
});

$('#btnc').on('click',function(){
currentText=''
numberbox=addbox=jianbox=chengbox=chubox=0
i=0;
$('#tips').text('');
$('#message').text(currentText);
});









});


