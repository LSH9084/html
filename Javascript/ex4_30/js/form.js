const input1 = document.querySelector('#input1')
console.log(input1.value)
const result = document.querySelector('.result')
console.log(result.innerHTML)
const send_m = document.querySelector('.send_m')
hml = document.createElement('span')
// hml.innerHTML = input1.value
result.innerHTML = input1.value

input1.addEventListener('change',handleChange)

function handleChange(){
    result.style.fontSize = '20px'
    result.style.backgroundColor = 'darkGray'
    result.innerHTML = input1.value +'!'
    input1.value = ""
}


//'input'이벤트는 값이 변경될때마다
//'change'이벤트는 enter를 입력시 발생
const input2 = document.querySelector('#input2')
// console.log(input2.value)

input2.addEventListener('keyup',areaChange)
function areaChange(e){
    if(e.keyCode == 13){
        // console.log(input2.value)
        input2.style.fontSize = '20px'
        input2.style.backgroundColor = 'darkGray'
        input2.innerHTML = input1.value +'!'
        result2.innerHTML += input2.value+`<br>`
        // const hmm = input2.value.split('\n').join('<br>')
        // result2.innerHTML = hmm
        input2.value = ''
    }
}
const result2 = document.querySelector('.result2')
input2.focus()
