$(function(){
    $('.inner_1 p:contains(2)').css('color','yellow')
    $('.inner_1 p').contents().css('color','green')
    $('.inner_1 p:has(strong)').css('backgroundColor','gray')
    $('.inner_2 p').not(':nth-child(3)').css('backgroundColor','darkGray')
    $('.inner_2 p').eq(2).css('backgroundColor','darkOrange')

    
    $('.inner_1').find('.txt1').css('border','1px solid green')
    $('.inner_2 p').filter(':nth-child(2)').css('font-weight','900')
    var inner = $('.inner_2 p')
    // inner.filter(function(i,o){
    //     console.log(i,o)
    //     return i%2 ==0
    // }).css('color','white')
    var rs1 = $('.inner_1 p').eq(3).is(":visible")
    console.log(rs1)
    $('.inner_1 p:hidden').css({
        'display' : 'blcok',
        color : 'red'
    })
    var rs2 = $('.inner_1 p input').eq(1).is(":checked")
    console.log(rs2)

    console.log($('.age').html())
    $('.name').html('<i>홍길동</i>')
    $('.age').text('<i>10</i>')

    var name = $('.name').attr('class')
    console.log(name)
    $('.age').removeAttr('class')
    $('.age').Attr()
})
