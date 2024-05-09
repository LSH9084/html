//$(document).ready(function(){}) 아무것도 안적었을떄 이게 축약되서 아래쪽에 적힘

$(function(){
    console.log('jquery ok...')
    $('.box1 h1').css('color','red')
    $('#title').css('color','blue').css('border','1px solid red')
    $('.title2').css({
        backgroundColor: 'darkGray',
        'color': 'white'
    })
    $('h2,h3').css('font-size','24px')
    $('.box1 h1').css({
        border : '1px dotted darkGray',
        color : 'darkGreen'
    })
    $('.box2 > h1').css('color','red')
    $('.box2').children('h1').css('color','red')
    const el = $('.box2')
    // el.children('h1').css('backgroundColor','darkGray')
    el.find('>h1').css('backgroundColor','darkGray')
    el.children().children().css('border','1px solid gray')
    $('.box2 > .txt + p ').css('color','blue')
    var style_1 = {
        'background-color' : 'white',
        'border' : '2px solid #f00',
    }
    $('.txt').next().next().next().css('background-color' , 'red')
    // $('.txt').prev().css(style_1)
    $('.txt').parent().css('backgroundColor','gray')
    $('.txt').nextAll().css(style_1)
    $('.txt').siblings().css('font-size','24px')
    $('#sec >h1').closest('div').css('color','green')
})