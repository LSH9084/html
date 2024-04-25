// const logArea = document.querySelector('.log2')
// const logArea2 = document.querySelector('.log3')
// console.log(logArea)

// logArea.addEventListener('mousedown', ()=> {
//     logArea.innerHTML = '마우스를 눌렀을때'
// })

// logArea.addEventListener('mouseup', ()=> {
//     logArea.innerHTML = '마우스를 놓았을때'
// })


// // logArea.addEventListener('mousemove', ()=> {
// //     logArea.innerHTML = '마우스 이동할떄'
// // })

// logArea.addEventListener('mouseenter', ()=> {
//    console.log('마우스가 enter할때')
// })

// logArea.addEventListener('mouseleave', ()=> {
//     console.log('마우스가 leave할때')
// })
// logArea.addEventListener('mouseover', ()=> {
//     console.log('마우스 mouseover 할때')
// })
// logArea.addEventListener('mouseout', ()=> {
//     console.log('마우스 mouseout할때')
// })


//over out 은 새로운 영역이 영역안에서 나올때마다 작동
//leave over는 가장 큰 영역만 작동

document.querySelector('.text').addEventListener('keydown', ()=>{
    console.log('키가 눌러졌습니다.')
})

document.querySelector('.text').addEventListener('keyup', ()=>{
    console.log('키 눌림 해제')
})

document.querySelector('.text').addEventListener('keypress', ()=>{
    console.log('문자가 입력되었습니다.')
})

document.querySelector('.text').addEventListener('keydown', ()=>{
    
})
var text = document.querySelector('.text')
var str = document.querySelector('.string_num')

text.addEventListener('keyup', (e)=>{
    const inputText = text.value
    str.innerHTML = inputText.length;
    //키 정보 
    console.log(e.key)
    // console.log(e.code)
    // console.log(e.keyCode)
    // console.log(e.altKey)
})


//윈도우 이벤트(리사이징)
var widthLog = document.querySelector('.widthLog')
var heightLog = document.querySelector('.heightLog')

widthLog.innerHTML = window.innerWidth + 'px' 
heightLog.innerHTML = window.innerHeight + 'px'

window.addEventListener('resize',()=>{
    widthLog.innerHTML = window.innerWidth + 'px' 
    heightLog.innerHTML = window.innerHeight + 'px'
})

// widthLog.innerHTML = window.outerWidth + 'px'
// heightLog.innerHTML = window.outerHeight + 'px'


var btn10 = document.querySelector('.btn10')
var btn11 = document.querySelector('.btn11')

btn10.addEventListener('click',()=>{
    alert('버튼 작동하기')
    btn11.dispatchEvent(new Event('click'))
})


btn11.addEventListener('click',()=>{
    alert('버튼Event')
})

document.querySelector('.link1').addEventListener('click',(e)=>{
    e.preventDefault() //기본 이벤트 작동 해제
    alert('링크1 테스트')
})


