const allCheck = document.querySelector('#allCheck')
const Btns = document.querySelectorAll('.alal input')
const box1_Btns = document.querySelectorAll('#box1 input')
const nextbtn = document.querySelector('#next')
const all = document.querySelector('.allbb')

const form1 = document.querySelector('form#box1')
const check11 = document.querySelector('#check11')
const check12 = document.querySelector('#check12')
const check13 = document.querySelector('#check13')
all.addEventListener('change',ghkrdlsFun)

console.log(allCheck)
allCheck.addEventListener('change',allCheckFun)
function allCheckFun(){
    Btns.forEach((e)=>{
        if(e.checked == true){
            e.checked = false
        } else {
            e.checked = true
        }

    }) 
}

function ghkrdlsFun(){
    if(check11.checked == true){
        if(check12.checked == true){
            if(check13.checked == true){
                nextFun()
            } else {
                nextFun2()
            } 
        } else nextFun2();
    } else nextFun2();
}

function nextFun(){
    nextbtn.disabled = false 
}
function nextFun2(){
    nextbtn.disabled = true
}

// function allCheckFun(){
//     Btns.forEach((e)=>{
//         if(e.checked == true){
//             e.checked = false
//         } else {
//             e.checked = true
//         }

//     }) 
// }