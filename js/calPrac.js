const output1 = document.querySelector('.output1')
const cle = document.querySelector('.clear')
const opera = document.querySelectorAll('.operator')
const btns = document.querySelectorAll('.btns')
const result = document.querySelector('.result')

cle.addEventListener('click',(e)=>{
    output1.value = ''
})

btns.forEach((v)=>{
    v.addEventListener('click',(e)=>{
        output1.value += e.target.value
    })
})

opera.forEach((v)=>{
    v.addEventListener('click',(e)=>{
        output1.value += e.target.value
    })
})

result.addEventListener('click',(e)=>{
    output1.value = eval(output1.value)

})




