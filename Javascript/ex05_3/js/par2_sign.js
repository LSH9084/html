const allChk = document.querySelector('.allChk input')
const btns = document.querySelectorAll('.btns')
const btn1 = document.querySelectorAll('.btn1 .btns')
const btn1_len = btn1.length
const btn2 = document.querySelectorAll('.btn2 .btns')
const btns_len = btns.length
const next = document.querySelector('#next')

btn2.forEach((v)=>{
    v.addEventListener('change',(e)=>{
        btn2Fun(e)
    })
})

function btn2Fun(){
    let count =0
    btn2.forEach((v)=>{
        if(v.checked){
            count++
        }
    })
    btn1.forEach((v)=>{
        if(v.checked){
            count++
        }
    })
    console.log(count)
    if(count >= btns_len){
        allChk.checked = true
    } else {
        allChk.checked = false
    }
   
}

btn1.forEach((v)=>{
    v.addEventListener('change',(e)=>{
        btn1Fun(e)
        btn2Fun(e)
    })
})

function btn1Fun(e){
    let count = 0
    btn1.forEach((v)=>{
        if(v.checked){
            count++
        }
    })
    console.log(count)
    if(count >= btn1.length){
        next.removeAttribute('disabled')
    } else {
        next.setAttribute('disabled',true)
    }
}


allChk.addEventListener('change',(e)=>{
    console.log(e.target.checked)
    allChkFun(e)
})

function allChkFun(e){
    if(e.target.checked){
        btns.forEach((v)=>{
            v.checked = true
            next.removeAttribute('disabled')
        })
    } else {
        btns.forEach((v)=>{
            v.checked = false
            next.setAttribute('disabled',true)
        })
    }
}

