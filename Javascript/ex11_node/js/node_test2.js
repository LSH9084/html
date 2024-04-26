const input = document.querySelector('#input')
const add = document.querySelector('#add')
const list = document.querySelector('.list')
const move = document.querySelector('#remove')
const down = document.querySelector('#down')
const up = document.querySelector('#up')
const kk = document.querySelectorAll('p')
const kkk = document.querySelector('.kk')
const li = document.querySelectorAll('li')
const lil = [...li]
add.addEventListener('click',()=>{
    let inputR = input.value.trim()
    const liElem = document.createElement('li')
    liElem.innerHTML = inputR
    setTimeout(()=>{
        list.insertBefore(liElem, list.firstElementChild)
        input.focus()
        listRemove()
},100)    
})
input.addEventListener('keyup',(e)=>{
    console.log(e.keyCode)
    if (e.keyCode == 13){
        add.focus()
    }
})
function listRemove() {
    const li = document.querySelectorAll('li')
    const lil = [...li]
    lil.forEach((e)=>{
        move.addEventListener('click',()=>{
            if(e.innerHTML == input.value){
                e.remove('li')
            }
        })
        e.addEventListener('click',()=>{
            e.remove()
        })
    }) 
}
function ttr(){
    kk.forEach((e)=>{
        e.addEventListener('click',()=>{
            e.remove()
            setTimeout(()=>{
                const liElem = document.createElement('li')
                liElem.innerHTML = e.innerHTML
                list.insertBefore(liElem, list.firstElementChild)
                listRemove()
        },100)
        })
    })
}
function reload(){
    down.addEventListener('click',()=>{
        window.location.reload()
        list.remove('li')
    })
}
listRemove()
ttr()
reload()