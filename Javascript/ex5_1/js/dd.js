const allChk = document.querySelector('#allChk')
const subChk = document.querySelectorAll('.allkk input')
const box1Chk = document.querySelectorAll('#box1 input')
const nextBtn = document.querySelector('#next')
const box2Chk = document.querySelectorAll('#box2 input')
var v1 = 'false'
var v2 = 'false'
var v3 = 'false'
var b1 = 'false'
var b2 = 'false'
var b3 = 'false'
box2Chk.forEach((e)=>{
    e.addEventListener('change',(i)=>{
        nextFun2(i)
    })
})
function nextFun2(i){
    if(i.target.id=='check21'){
        b1 = i.target.checked
        kkfun(b1)
    }
    if(i.target.id == 'check22'){
        b2 = i.target.checked
        kkfun(b2)
    }
    if(i.target.id == 'check23'){
        b3 = i.target.checked
        kkfun(b3)
    }
}
box1Chk.forEach((e)=>{
    e.addEventListener('change',(i)=>{
        nextFun(i)
    })
})
function nextFun(i){
        if(i.target.id=='check11'){
            v1 = i.target.checked
            kkfun(v1)
        }
        if(i.target.id == 'check12'){
            v2 = i.target.checked
            kkfun(v2)
        }
        if(i.target.id == 'check13'){
            v3 = i.target.checked
            kkfun(v3)
        }
}
function kkfun(){
    if(`${v1}+${v2}+${v3}` == 'true+true+true'){
        nextBtn.disabled =false
        if(`${b1}+${b2}+${b3}` == `${v1}+${v2}+${v3}`){
            allChk.checked = true
        } else {allChk.checked = false}      
    } else nextBtn.disabled = true
    if(`${b1}+${b2}+${b3}` == 'true+true+true'){
        if(`${b1}+${b2}+${b3}` == `${v1}+${v2}+${v3}`){
            allChk.checked = true
        } else {allChk.checked = false}
    }
}
allChk.addEventListener('change',(e)=>{
    if(e.target.checked == true){
        agreeFun()
    } else disagreeFun();
})
function agreeFun(){
    subChk.forEach((e)=>{
        if(e.checked == false){
            e.checked = true
            v1 = 'true'
            v2 = 'true'
            v3 = 'true'
            b1 = 'true'
            b2 = 'true'
            b3 = 'true'
        }
    })
    nextBtn.disabled = false
}
function disagreeFun(){
    subChk.forEach((e)=>{
        if(e.checked == true){
            e.checked = false
            v1 = 'false'
            v2 = 'false'
            v3 = 'false'
            b1 = 'false'
            b2 = 'false'
            b3 = 'false'
        }
    })
    nextBtn.disabled = true
}