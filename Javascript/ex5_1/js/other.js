const rangeBtn = document.querySelector('#rangeBtn')
const result_range = document.querySelector('.result_range')
const disabled1 = document.querySelector('.disabledBtn')
const disabled2 = document.querySelector('.disabled2Btn')
const disabled3 = document.querySelector('.disabled3Btn')
const myColor = document.querySelector('#myColor')
const result_color = document.querySelector('.result_color')
const result_rgb = document.querySelector('.result_rgb')
const rangeS = document.querySelectorAll('.rangeS input')
disabled3.addEventListener('click',diaaFFun)
function diaaFFun(){
    rangeS.forEach((e)=>{
        console.log(e)
        e.disabled = true
    })
}

disabled1.addEventListener('click',disFFFun)
function disFFFun(){
    rangeBtn.disabled = true
}

disabled2.addEventListener('click',disFFun)
function disFFun(){
    myColor.disabled = true
}

rangeS.forEach((e)=>{
    e.addEventListener('change',rangeVFun)
})
function rangeVFun(){
    var redV
    var greenV 
    var blueV
    rangeS.forEach((e)=>{
        if(e.id == 'red'){
            console.log(e.value)
            redV = e.value
        } if(e.id == 'green'){
            console.log(e.value)
            greenV = e.value
        } if(e.id == 'blue'){
            console.log(e.value)
            blueV = e.value
        }  
    }) 
    var myRGB = `rgb(${redV},${greenV},${blueV})`
    var myGGB = `rgb(${greenV},${blueV},${redV})`
    console.log(myRGB)
    result_rgb.style.backgroundColor = myRGB
    result_rgb.style.color = 'white'
    result_rgb.style.width = '500px'
    result_rgb.style.height = '100px'
    result_rgb.innerHTML = '색 변경중'
    result_rgb.style.textAlign = 'center'
    result_rgb.style.paddingTop = '35px'
    result_rgb.style.fontSize = '22px'
    result_rgb.style.fontWeight = '900'
}

myColor.addEventListener('change',colorFun)
function colorFun(){
    result_color.style.backgroundColor = myColor.value
    result_color.style.display = 'block'
    result_color.style.width = '500px'
    result_color.style.height = '100px'
    result_color.style.textAlign = 'center'
    result_color.style.paddingTop = '35px'
    result_color.style.fontSize = '22px'
    result_color.style.fontWeight = '900'
    result_color.style.color = 'white'
}


rangeBtn.addEventListener('change',rangeFun)
function rangeFun(){
    result_range.innerHTML = rangeBtn.value

}

result_range.innerHTML = rangeBtn.value