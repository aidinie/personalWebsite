/**
 * Created by nad on 2017/3/12.
 */
//轮播图
var oHeader=document.getElementById('header');
var oCarouse=document.getElementById('carouse');
var aImg=oCarouse.getElementsByTagName('img');
var oCarouseList=document.getElementById('carouse-list');
var aLi=oCarouseList.getElementsByTagName('li');
var oPrev=document.getElementById('prev');
var oNext=document.getElementById('next');
var iNow=0;
var zIndex=2;
for (var i=0;i<aLi.length;i++){
    aLi[i].index=i;

    aLi[i].onmouseover=function () {
        changeImg(this.index);
        iNow=this.index;
    }
}

oPrev.onclick=function () {

    iNow--;
    console.log(iNow);
    if(iNow==-1){
        iNow=3;
    }
    changeImg(iNow);
    return false;
};
oNext.onclick=function () {
    iNow++;
    if(iNow==aLi.length){
        iNow=0;
    }
    changeImg(iNow);
    return false;
};


function changeImg(idx) {
    for(var i=0;i<aLi.length;i++){
        aLi[i].className="";
    }
    aLi[idx].className="selected";
    aImg[idx].style.opacity="0";
    aImg[idx].style.filter="alpha(opacity=0)";
    aImg[idx].style.zIndex=zIndex++;
    animate(aImg[idx],{opacity:100});
}
var timer=setInterval(function () {
    oNext.onclick();
},2000);
oHeader.onmouseover=function () {
    clearInterval(timer);
};
oHeader.onmouseout=function () {
    timer=setInterval(function () {
        oNext.onclick();
    },2000);
};