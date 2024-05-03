const btns = document.querySelectorAll('.btns .btn')
const btns1 = [...btns]
const result = document.querySelector('.result')
const back = document.querySelector('#back')
const font = document.querySelector('#font')
const color = document.querySelector('#color')

back.addEventListener('click',backFun)
font.addEventListener('click',fontFun)
color.addEventListener('click',colorFun)


// btns1.forEach((e)=>{
//     e.addEventListener('change',()=>{
//         if(e.id == 'back' ){
//             backFun()
//         }
//         if(e.id == 'font'){
//             fontFun()
//         }
//         if(e.id == 'color'){
//             colorFun()
//         } 
//     })
// })
backFun()
function backFun(){
    console.log('==체크중==')
    console.log(btns1)
    console.log(result)
    let check_str = ''
    if(back.checked){
    check_str = back.value
    }
    // btns1.forEach((e)=>{
    //     console.log(result)
    //     if(e.checked){
    //         console.log(e.checked)
    //         console.log(e.value)
    //         check_str = e.value
    //     }
    // })
    result.style.backgroundColor = `${check_str}`
    console.log('==체크끝==')
}
function fontFun(){
    console.log('==체크중==')
    console.log(btns1)
    console.log(result)
    let check_str2 = ''
    btns1.forEach((e)=>{
        if(e.checked){
            console.log(e.checked)
            check_str2 = e.value
        }
    })
    result.style.fontSize = `${check_str2}`
    console.log('==체크끝==')
}
function colorFun(){
    console.log('==체크중==')
    console.log(btns1)
    console.log(result)
    let check_str3 = ''
    btns1.forEach((e)=>{
        if(e.checked){
            check_str3 = e.value
        }
    })
    result.style.color = `${check_str3}`
    console.log('==체크끝==')
}

