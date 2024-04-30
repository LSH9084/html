
const add = document.querySelector('#add')
const remove = document.querySelector('#remove')
const clear = document.querySelector('#clear')
const input = document.querySelector('#input')

const list = document.querySelector('.list')
var listin1 = document.querySelectorAll('ul li')
var listin = [...listin1]

clickE()
add.addEventListener('click',()=>{
    console.log("add li=>",listin1)

    const inputValue = input.value
    const html = document.createElement('li')
    html.innerHTML = inputValue

    console.log("li=>", html)
    list.appendChild(html,list.firstElementChild)
    var listin1 = document.querySelectorAll('ul li')
    var listin = [...listin1]
    console.log("add after li=>",listin)
    clickE()
    
})


input.addEventListener('keyup',(e)=>{
    if(e.keyCode == 13){
        add.focus()
    }
})

remove.addEventListener('click',()=>{
    console.log("remove li=>", listin1)
    
    // listin.forEach((e)=>{
    //     if(e.textContent == input.value){
    //         console.log(e.textContent)
    //         e.remove()
    //     }
    // })
})

clear.addEventListener('click',()=>{
    window.location.reload()
})

function clickE(){
    var listin1 = document.querySelectorAll('.list li')
    var listin = [...listin1]
    console.log(listin)
    console.log(listin)
    listin.forEach((e)=>{
        console.log(e)
        
        e.addEventListener('click',()=>{
            e.remove()
        })
    })
}


