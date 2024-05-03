//이거 한번더 복습하기

const radioGroup2 = document.querySelector('form#radioForm')
const mySel = document.querySelector('select#mySel')

function radioFormFun(){
    const radioGroup2 = document.querySelector('form#radioForm')
    console.log(radioGroup2.fruit.value)
    console.log(radioGroup2.drink.value)
    resultFun()
}

radioGroup2.addEventListener('change',(radioFormFun))

mySel.addEventListener('change',selectFun)


function resultFun(){
    const result = document.querySelector('.result')
    result.innerHTML = radioGroup2.fruit.value +'\n'+radioGroup2.drink.value
    result.style.fontSize = '24px'
    result.style.textAlign = 'center'
    result.style.backgroundColor = 'darkGray'
    result.style.paddingTop = '20px'
}

function selectFun(){
    const result1 = document.querySelector('.result1')
    result1.innerHTML = mySel.value
    result1.style.color = 'red'
    result1.style.fontSize = '24px'
    result1.style.fontWeight = '900'
    result1.style.textAlign = 'center'
    result1.style.paddingTop = '20px'
    result1.style.backgroundColor = 'darkGray'
}

const mySel2 = document.querySelector('select#mySel2')
console.log(mySel2)

// mySel2.innerHTML = `<option value="0">0</option>`
option_str = ""
for(let i=1; i<=31; i++){
    option_str += `<option value="${i}">${i}</option>`   
}
mySel2.innerHTML = option_str

mySel2.addEventListener('change',multiSelected)

function selectFun2(){
    const result3 = document.querySelector('.result3')
    result3.innerHTML = mySel2.value
    result3.style.color = 'red'
    result3.style.fontSize = '24px'
    result3.style.fontWeight = '900'
    result3.style.textAlign = 'center'
    result3.style.paddingTop = '20px'
    result3.style.backgroundColor = 'darkGray'
}

function multiSelected(){
    const result3 = document.querySelector('.result3')
    const mysel2_1 = [...mySel2]
    var sel_str = ""
    mysel2_1.forEach((e)=>{
        if(e.selected){
            sel_str += e.value+","
        }
    })
    var temp = sel_str.substr(0,sel_str.lastIndexOf(','))
    console.log(temp)
    sel_str = sel_str.substr(0,sel_str.lastIndexOf(','))
    result3.innerHTML = sel_str
    result3.style.color = 'red'
    result3.style.fontSize = '24px'
    result3.style.fontWeight = '900'
    result3.style.textAlign = 'center'
    result3.style.paddingTop = '20px'
    result3.style.backgroundColor = 'darkGray'
}
