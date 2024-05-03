const aChk = document.querySelector('#chA')
const bChk = document.querySelector('#chB')
const cChk = document.querySelector('#chC')
const result = document.querySelector('.result')
const chkS = document.querySelectorAll('.c')
const chkS1 = [...chkS]
console.log(chkS1)
function checkBoxArray(){
    chkS1.forEach((e)=>{
        if(e.id == 'chA'){
            borderFun(e)
        } if(e.id == 'chB'){
            fontSizeFun(e)
        } if(e.id == 'chC'){
            colorFun(e)
        }
        console.log('====끝====')
    }) 
}

checkBoxArray()

//중요 체크박스 변화가 생겼을 때 체크상태 확인하고 스타일 적용
chkS1.forEach((e)=>{
    e.addEventListener('change',()=>{
        checkBoxArray()
    })
})

function borderFun(e){
    console.log("border style function....")
    if(e.checked){
        result.style.borderWidth = '20px'
    } else {
        result.style.borderWidth = ''
    }
}

function fontSizeFun(e){
    console.log("fontSize style function....")
    if(e.checked){
        result.style.fontSize = '44px'
    } else {
        result.style.fontSize = ''
    }
}

function colorFun(e){
    console.log("color style function....")
    if(e.checked){
        result.style.color = 'purple'
    } else {
        result.style.color = 'darkGray'
    }
}



