$(function(){
    var slides = $('.slide_show .slide')

    // jqeury each
    // $(selector).each(function(idx,item))
    // $.each(object, function(idx, item))

    // 슬라이드 초기화 ( 위치설정)
    slides.each(function(idx, slide){
      //console.log(idx, slide, idx*300)
      $(this).css({
        'left': (idx*300)+'px' // 0, 300, 600,....
      })
    })

    // 전역변수
    var slide_show_left = $('.slide_show').css('left')
    //console.log('left:',slide_show_left)
    var slide_show_left = 0
    $('.lBtn').click(function(){
      //console.log('left...',)

      slide_show_left += -300 //  console.log(slide_show_left)
      console.log('left:', slide_show_left)

      // 첫번째 슬라이드 위치 이면 위치를 그대로 유지
      console.log(slides.length)
      if (slide_show_left < (slides.length-1)*-300){
        slide_show_left = (slides.length-1)*-300
      }
      $('.slide_show').stop().animate({
        'left': slide_show_left+'px'
      }, 1000)
    })

    $('.rBtn').click(function(){
      console.log('before right:', slide_show_left)

      slide_show_left += 300 //  console.log(slide_show_left)
      console.log('after right:', slide_show_left)

      if (slide_show_left > 0){
        slide_show_left = 0
      }
      $('.slide_show').stop().animate({
        'left': slide_show_left+'px'
      }, 1000)        
    })
})