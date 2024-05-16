
$(function(){
    $('.btn').on('click',()=>{
        const random_number = Math.floor(Math.random()*3)
        console.log(random_number+1)
        $('.img img').attr('src',`./image/math_img_${random_number+1}.jpg`)
        $('.img img').attr('alt',`${random_number+1}`)
        console.log($('.img img').attr('alt'))
        if($('.inp').val()=='가위'){
            $('.inp').attr('id',1)
        }
        if($('.inp').val()=='바위'){
            $('.inp').attr('id',2)
        }
        if($('.inp').val()=='보'){
            $('.inp').attr('id',3)
        }
        if($('.img img').attr('alt')==3){
            if($('.inp').attr('id')==1){
                $('.result').text('승리하였습니다.')
            } else if($('.inp').attr('id')==2){
                $('.result').text('패배하였습니다.')
            } else {
                $('.result').text('비겼습니다.')
            }  
        } else if($('.img img').attr('alt')==2){
            if($('.inp').attr('id')==1){
                $('.result').text('패배하였습니다.')
            } else if($('.inp').attr('id')==2){
                $('.result').text('비겼습니다.')
            } else {
                $('.result').text('승리하였습니다.')
            }
        } else {
            if($('.inp').attr('id')==1){
                $('.result').text('비겼습니다.')
            } else if($('.inp').attr('id')==2){
                $('.result').text('승리하였습니다.')
            } else {
                $('.result').text('패배하였습니다.')
            }
        }
        $('.inp').val('') 
    })
})

