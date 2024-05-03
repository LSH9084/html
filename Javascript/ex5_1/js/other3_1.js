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


allCheck.addEventListener('change',allCheckFun)

function allCheckFun(){
    var v 
    Btns.forEach((e)=>{
        v = e.checked
        if(v == false){
            VfFun(e)
        } else {
            VfFun2(e)
        }
    })    
}
function VfFun2(e){
    e.checked = false
}
function VfFun(e){
    if(e.checked == false){
    e.checked = true}
}

function checkFun1(e){
    e.checked = true
}
function checkFun2(e){
    e.checked = false
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