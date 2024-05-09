$(function(){
    $('#menu > li').css('list-style','none')
    $('#menu > li:first').css('background-color','#0ff')
    $('#menu > li:last').css('background-color','#ff0')
    $('#menu > li:nth-child(2)').css('background-color','red')
    $('#menu > li:nth-child(3)').css('background-color','#00f')
    $('#menu > li:odd').css('color','#15f')
    $('#menu > li:even').css('color','black')
    $('#menu > li').eq(0).css('border','5px solid black')
    $('#menu > li:lt(2)').css('font-size','20px')
    $('#menu > li:gt(3)').css('font-size','8px')

    $('#menu2 > li').css('list-style','none')
    $('#menu > li:first-of-type').css('font-weight','900')
    $('#menu2 > li').slice(0,3).css('font-weight','900')
    const arr = $('#menu li')
    $.each(($('#menu > li')),function(i,o){
        // console.log(i,o)
        // console.log(i,$(this))
    })
    $(arr).each(function(i,o){
        // console.log(i,o)
        // console.log(i,$(this))
    })
    $(arr).map(function(i,o){
        // console.log(i,o)
    })
    const info = [
        {"area":"서울","name":"홍길동"},
        {"area":"부산","name":"홍길순"},
        {"area":"양산","name":"강감찬"},
        {"area":"수원","name":"이순신"},
    ]
    
    var info2 = $.map(info,(a,idx)=>{
        console.log(a,idx)
        if(a.area == '서울')return a
    })
    console.log('area:',info2)

    var info3 = $.grep(info,(a,idx)=>{
        console.log(a,idx)
        if(a.area == '서울')return true
        else return false
    })
    console.log('area:',info3)

    console.log($('#menu > li').index($('#item')))

    $('.box2 li').css('list-style','none')
    $('.box2 li a').css('text-decoration','none').css('color','black')
})