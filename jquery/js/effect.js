$(function(){
    $('#btn1').on('click',function(){
        $('.content').slideUp(1000,'linear',function(){
            $('#btn1').hide()
            $('#btn2').show()
        })
    })
    $('#btn2').on('click',function(){
        $('.content').fadeIn(1000,'swing',function(){
            $('#btn2').hide()
            $('#btn1').show()
        })
    })
    $('#btn3').on('click',function(){
        $('.content').slideToggle(1000,'linear',function(){
            $('#btn1').toggle()
            $('#btn2').toggle()
        })
    })
    $('.btns button').on('click',function(e){
        if(e.target.id == 'btn4'){
            $('.content').fadeTo('fast',0.3,function(){
            })
        } else if (e.target.id == 'btn5'){
            $('.content').fadeTo('slow',1,function(){
            })
        }
    })
    $('.btn1').on('click',function(){
        $('.boxb1').animate({
            left : '300px',
            top : '50px'
        },1000,'linear',function(){
            $('.boxb1').animate({
                left : '0px',
                top : '50px'
            },500,'linear')
        })
    })
    $('.btn2').on('click',function(){
        $('.boxb1').animate({
            top : '100px',
            left : '200px'
        },1000,'linear')
    })

})