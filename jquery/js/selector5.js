$(function(){
    var src12 = $('.box5 img').attr('src')
    console.log(src12)

    $('.box5 img').attr({
        width : 150,
        src : src12.replace("1.jpg","2.jpg"),
        art : '바위'
    }).removeAttr('border')
    $('.box6 p:nth-child(1)').addClass('add')
    $('.box6 p:nth-child(2)').removeClass('block')
    console.log($('.box6 p:nth-child(1)').hasClass('add'))
    console.log($('.box6 p:nth-child(2)').hasClass('block'))
    $('.box6 p:nth-child(3)').toggleClass('to')
    $('.box6 p:nth-child(4)').toggleClass('to')
    
})