$(function(){
start();
var imgs=2;
var now=0;
function start(){
    $('slide img').eq(0).siblings().fadeIn(1000);
    setInterval(function(){slide();},2000);
};


    function slide(){
        now=now==imgs?0:now+=1;
        $('#slide img').eq(now-1).fadeOut(1000);({'left':'-1200px'});
        $('#slide img').eq(now).fadeIn(1000);
    
};
});