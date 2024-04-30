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

const upp = document.querySelector('#prev')
const downn = document.querySelector('#next')
const prev_next = document.querySelectorAll('.prev_next button')
console.log(prev_next)

for ( let button of prev_next){
    console.log(button)
    button.addEventListener('click',(e)=>{
        console.log(e.target.id)
        const listt = document.querySelectorAll('.list li')
        const isZero = listt.length
        if(isZero > 0 ){
            listt.forEach((r)=>{
                let rname = r.innerHTML
                if (rname == input.value.trim()){
                    console.log(r)
                    if(e.target.id == 'prev'){
                        let prevr = r.previousElementSibling
                        prevr.before(r)
                    } else {
                        let nextr = r.nextElementSibling
                        nextr.after(r)
                    }
                }
            })
        }
        
    })
}

// const li = document.querySelectorAll('li')
// const lil = [...li]


// lil.forEach((e)=>{
    
//     console.log(e)
//     e.addEventListener('click',()=>{
//         const tht = lil.length
//         if(tht > 0){
//             let thte = e.previousElementSibling
//             console.log(thte)
//             thte.before(e)
            
//         }
//     })
// })