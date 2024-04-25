var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn4 = document.querySelector('.btn4')
var btn5 = document.querySelector('.btn5')
var btn6 = document.querySelector('.btn6')
var btn7 = document.querySelector('.btn7')
var btn8 = document.querySelector('.btn8')
btn1.addEventListener('click',()=>{
    btn_messT = '아아아아'
    document.querySelector('.btn_mess').textContent = btn_messT

})

var btn1 = document.querySelector('.btn2')

btn2.addEventListener('click',onClickButton)

function onClickButton() {
    btn_messT2 = 'btn2버튼 클릭이 발생했습니다.'
    document.querySelector('.btn_mess').innerHTML = btn_messT2
}

// btn4.addEventListener('click', ()=>{
//     onclick()
// })
btn4.addEventListener('click',()=>{
    onclick()
})
function onclick() {
    btn_messT4 = 'btn4를 클릭하셧습니다.'
    document.querySelector('.btn_mess').innerHTML = btn_messT4  
}

//이벤트 등록
//이벤트 타깃.addEventListener('이벤트종류',수행할 함수, 옵션)


//이벤트 1회 등록
//옵션 지정

const option = { once : true}
btn5.addEventListener('click', ()=> {
    alert('버튼 5 클릭')
},option)


btn6.addEventListener('click', onclick6)
btn7.addEventListener('click', ()=>{
    btn6.removeEventListener('click',onclick6)
    document.querySelector('.btn6_re').innerHTML = ''
})


function onclick6 () {
    alert('버튼6')
    btn6_html = '실행중'
    document.querySelector('.btn6_re').innerHTML = btn6_html
}

btn8.addEventListener('click',()=>{
    window.location.reload()
})