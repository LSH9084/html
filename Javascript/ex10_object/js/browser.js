/*
window -> document, screen, location, history, navigator
document - h1, body, div, ...(태그요소)

window 메서드
alert ('메시지'), prompt('메시지','문자열'), confirm('문자열')
setInterval(함수식, 밀리초)[계속 반복], setTimeout(함수식, 밀리초)[딱 한번만하고 끝]
open('url','창이름','창옵션')
*/

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const inp1_n = document.querySelector('.inp1')
const inp2_e = document.querySelector('.inp2')
// const btn7 = document.querySelector('.btn7')

btn1.addEventListener('click',()=>{
    let mySum = [1,2,3,4,5].reduce ((a,b)=>a+b)
    alert(`합의 결과값: ${mySum}`)
    LinkN()
})

function LinkN() {
    const b = 'ex01_date.html'
    window.open(b,'_blank')
    location.href = "http://naver.com"
}

// function LinkN(i){
//     for(i=0; i<3; i++){
//         if(i==0){
//             const b = 'ex01_date.html'
//             window.open(b,'_blank')
//         } else if(i==1){
//             window.open('http://naver.com','_blank')
//         } else {
//             window.open('https://github.com/LSH9084')
//         }
//     }
// }
btn2.addEventListener('click',()=>{
    // window.open('./js/ex01_date.js')
    // const win = window.open('./js/ex01_date.js')
    const win = window.open('./js/ex01_date.js',"win1","width=750, height=400, left=300,top=300,toolbars=yes, status=yes, location=yes")

    win.focus()

})

btn3.addEventListener('click',()=>{
    window.close()
})

btn4.addEventListener('click',()=>{
    var count = 100;
    setTimeout(()=>{
        count++
        console.log(count)
        console.log("==수행끝==")
    },2000)
    
})

btn5.addEventListener('click',()=>{
    window.location.reload()
})

btn6.addEventListener('click',()=>{
    window.location.href = './first.html'
})

inp1_n.focus()

inp1_n.addEventListener('keyup',(e)=>{
    let maxLen = inp1_n.value.length
    console.log('name L:',maxLen)
    if(e.keyCode == 13 || maxLen >=7){
        inp2_e.focus()
    }
})


inp1_n.addEventListener('focus',()=>{
    console.log('이름을 입력해주세요')
})

inp1_n.addEventListener('blur',()=>{
    console.log('이름입력완료')
})

inp2_e.addEventListener('focus',()=>{
    console.log('이메일을 입력해주세요')
})

inp2_e.addEventListener('blur',()=>{
    console.log('이메일입력완료')
})
