console.log('Loaded!');


var element=document.getElementById('main-text');
element.innerHTML="This is NEW TEXT";

var img=document.getElementById('madi');
img.onClick=function(){
    img.style.marginLeft= '100px';
}