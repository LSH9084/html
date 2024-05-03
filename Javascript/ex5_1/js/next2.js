const inputVal = document.querySelector('#inputVal')
const inputVal2 = document.querySelector('#inputVal2')
const allInput = document.querySelectorAll('.input label')
const allInput_len = allInput.length
const inputVas = document.querySelectorAll('.inputva label')
const sign_up = document.querySelector('#sign_up')

inputVal2.addEventListener('focus',(e)=>{
    var rN = []
    for(let i=0; i<6; i++){
    var randomNum = Math.floor(Math.random()*10)
    rN.push(randomNum)
    }
    inputVal.value = `${rN[0]}${rN[1]}${rN[2]}${rN[3]}${rN[4]}${rN[5]}`
})

inputVal2.addEventListener('keyup',inputFun)
function inputFun(){
    if (inputVal2.value == inputVal.value){
        sign_up.disabled = false
    } else sign_up.disabled = true;
}

allInput.forEach((e)=>{
    e.addEventListener('keyup',()=>{
        allCntFun()
    })
})

function allCntFun(){
    let count = 0
    allInput.forEach((e)=>{
        if(e.lastChild.value != false){
            count++
        }
    })
    if(count == 4){
        inputVal2.removeAttribute('disabled')
    } else inputVal2.setAttribute('disabled',true)
}


allInput.forEach((e)=>{
    e.addEventListener('keyup',(i)=>{
        if(i.keyCode == '13'){
            if(e.id == 'name'){
                foFun(e)
            }
            if(e.id == 'password1'){
                foFun2(e)
            }
            if(e.id == 'password2'){
                foFun3(e)
            }
            if(e.id == 'email'){
                foFun4(e)
            }
        }
    })
})
function foFun(e){
    if(e.lastChild.value.length >= 5){
        e.nextElementSibling.lastChild.focus()
        
    } else alert('5자리 이상 입력 해주세요')
}
function foFun2(e){
    e.nextElementSibling.lastChild.focus()
}

function foFun3(e){
    var password1Va = e.lastChild.value
    var password2Va = e.previousElementSibling.lastChild.value
    if(password1Va == password2Va && password2Va != null){
        e.nextElementSibling.lastChild.focus()
    } else {
        alert('비밀번호를 재확인 해주세요')
        e.lastChild.value = ''
}
}
function foFun4(e){
    var emailInput = e.lastChild
	var email = e.lastChild.value

	if (emailCheck(email)) {
		inputVal2.focus()
	} else {
		alert('유효하지 않은 이메일 주소입니다.')
	}
}

function emailCheck(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	}else{
		return true;
	}
}








