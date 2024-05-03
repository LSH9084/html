const inputVal = document.querySelector('#inputVal')
const randomNum1 = Math.floor(Math.random()*10)
const randomNum2 = Math.floor(Math.random()*10)
const randomNum3 = Math.floor(Math.random()*10)
const randomNum4 = Math.floor(Math.random()*10)
const randomNum5 = Math.floor(Math.random()*10)
const inputVa12 = document.querySelector('#inputVal2')
const sign_up = document.querySelector('#sign_up')
const btns = document.querySelectorAll('.input label')
const pass = document.querySelectorAll('.btn2')
const form = document.querySelector('.form')
const password1 = document.querySelector('#password1')
var v1
var v2
pass.forEach((e)=>{
    e.addEventListener('change',()=>{
        if(e.id == 'password1'){
            v1 = e.value
            lasFun(v1)
        } else {
            v2 = e.value
            console.log(v2)
            lasFun(v2)
        }
    })
})
function lasFun(e){
    console.log(v1,v2)
    if(v1 != v2 && v2 != null){
        alert('비밀번호를 다시 확인해주세요')
        password1.focus()
    }
}
btns.forEach((e)=>{
    e.addEventListener('keyup',(i)=>{
        if(i.keyCode == '13'){
            console.log(e.lastChild.value.length)
            if(e.lastChild.value.length>= '5'){
                e.nextElementSibling.focus()
            } else {alert('최소 5글자를 입력해주세요')
                    e.lastChild.value = ''
            } if(e.lastChild.id == 'email'){
                e.lastChild.value += '@gmail.com' 
            }
        }
    })
})
inputVal.value = `${randomNum1}${randomNum2}${randomNum3}${randomNum4}${randomNum5}`
inputVa12.addEventListener('keyup',inputFun)
function inputFun(){
    if (inputVa12.value == inputVal.value){
        sign_up.disabled = false
    } else sign_up.disabled = true;
}
