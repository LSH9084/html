$(function(){
    $('.btn1').on('click',function(){
        console.log('btn1 클릭')
    })
    $('.btn2').click(function(){
        console.log('btn2 클릭')
    })
    $('.btn1').on('click',nknk)
    function nknk() {
        $('.btn1').parent().next()
        .text('btn1 클릭')
        .css('color','blue')
    }
    $('.btn2').on({
        'click' : function(){
            $('.btn2').parent().next()
            .text('btn2 클릭')
            .css('color','red')
        },
        'mouseover' : function(){
            $(this).parent().next().css('color','purple')
        }
    
    })
    // $('.btn1').trigger('click')
    $('.btn2').on('click',function(){
        $('.btn1').off('click')
    })
    // $('.link').css('text-decoration','none').css('color','black')
    // $('.link').click(function(e){
    //     e.preventDefault()
    // }).click(function(){
    //     console.log('===dd===')
    //     setTimeout(()=>{
    //         // location.href='http://www.google.com'
    //     },3000)
    // })
    $('.div1').on({
        'mouseenter' : function (){
            $(this).css({
                backgroundColor : 'black',
                color : 'white',
                fontWeight : '900'
            })
        },
        'mouseleave' : function(){
            $(this).css({
                backgroundColor : 'white',
                color : 'black',
                fontWeight : '900'
            })
        }
    })
    $('.div2').on({
        'mouseover': function(){
            $(this).css('text-align','center')
        },
        'mouseout': function(){
            $(this).css('text-align','left')
        }
    })  
    $(document).on('mousemove',function(e){
        $('.div1').text(e.pageX+'.'+e.pageY)
    })
    $(window).on('scroll',function(){
        var top = $(this).scrollTop()
        var left = $(this).scrollLeft()
        $('.top').text(top)
        $('.left').text(left)
    })
    $('#user_id, #user_ps').on('focus',function(){
        $(this).css({
            backgroundColor : 'blue',
            color : 'white'
        })
    })
    $('.box3 #user_id, .box3 #user_ps').on('blur',function(){
        $(this).css({
            backgroundColor : 'green',
            color : 'black'
        })
    })
    $('#frm2').on('focusin',function(){
        $(this).children().css({
            backgroundColor : 'blue',
            color : 'white'
        })
    })
    $('#frm2').on('focusout',function(){
        $(this).children().css({
            backgroundColor : 'green',
            color : 'black'
        })  
    })
    $('.box4 #user_id2').on('keydown', keyfun)
    function keyfun(e){
        var direct = ''
        switch(e.keyCode){
            case 37:
                direct = 'LEFT'
                break;
            case 38:
                direct = 'TOP'
                break;
            case 39:
                direct = 'RIGHT'
                break;
            case 40:
                direct = 'BOTTOM'
                break; 
        }
        if(direct){
            $('#user_id2').val(direct)
        }
    }
})