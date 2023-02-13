$(function () {
    $('.nav li').mouseover(function () {
        $(this).children('.sub').stop().slideDown(300);
    });
    $('.nav li').mouseout(function () {
        $(this).children('.sub').stop().slideUp(300);
    });

  
});