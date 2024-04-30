const pEl = document.querySelector('#info')
// pEl.style.color = "red"
// pEl.style.fontSize = "70px"
// pEl.style.backgroundColor = "darkGray"
// pEl.style.fontWeight = "900"

const strokeColor = "#c52b84"
const strokeBorder = "#b52b54"
const strokeLineType = "dotted"
const strokeLineWeight = "5px"
// pEl.style.color = strokeColor
// pEl.style.border = `${strokeLineWeight} ${strokeLineType} ${strokeBorder}`

// console.log(getComputedStyle(pEl).width)
// console.log(getComputedStyle(pEl).color)
// console.log(getComputedStyle(pEl).fontSize)




var stroke
const pS = document.querySelectorAll('.container p')
pS1 = [...pS]
pS1.forEach((e)=>{
    e.addEventListener('click',()=>{
        console.log(e)
        if(e.id == 'info'){
            infoFun(e)
        } else if(e.id == 'p2'){
            p2Fun(e)
        } else if(e.id == 'p3'){
            p3Fun(e)
        } else if(e.id == 'p4'){
            p4Fun(e)
        }
    })
})

function infoFun(e){
    e.style.color = `${strokeBorder}`
    e.style.backgroundColor = 'white'
    e.addEventListener('click',()=>{
        e.style.color = ''
        e.style.backgroundColor = ''
        eventRe()
        
    })
}

function p2Fun(e){
    e.style.color = 'red'
    e.innerHTML = `1번을 클릭하였습니다.`
    e.classList.add('box')
    e.style.backgroundColor = 'darkRed'
    e.addEventListener('click',()=>{
        e.style.color = ''
        e.innerHTML = `1`
        e.classList.remove('box')
        e.style.backgroundColor = ''  
        eventRe() 
    })
}

function p3Fun(e){
    e.innerHTML = `2번을 누르셨습니다.`
    e.style.color = "purple"
    e.classList.remove('box')
    e.style.fontSize = "20px"
    e.addEventListener('click',()=>{
        e.innerHTML = `2`
        e.style.color = ""
        e.classList.add('box')
        e.style.fontSize = ""
        eventRe()
    })
}

function p4Fun(e){
    e.innerHTML = `3번을 클릭`
    e.style.backgroundColor = 'green'
    e.style.fontWeight = `900`
    e.style.width = `450px`
    e.addEventListener('click',()=>{
        e.innerHTML = `3`
        e.style.backgroundColor = ''
        e.style.fontWeight = ``
        e.style.width = ``
        eventRe()
    })
}

function eventRe(){
        pS1.forEach((e)=>{
            e.addEventListener('click',()=>{
                console.log(e)
                if(e.id == 'info'){
                    infoFun(e)
                } else if(e.id == 'p2'){
                    p2Fun(e)
                } else if(e.id == 'p3'){
                    p3Fun(e)
                } else if(e.id == 'p4'){
                    p4Fun(e)
                }
            
            })
        })
}