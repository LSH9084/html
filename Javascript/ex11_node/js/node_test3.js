// function add() {
    
// }

// function del() {

// }

// function allclear(){

// }

// function addclick(){

// }

// function delclick(){

// }

const input = document.querySelector('#input')
const add = document.querySelector('#add')
const remove = document.querySelector('#remove')
const allDel = document.querySelector('#alldelete')
const prev_next = document.querySelectorAll('.prev_next button')
const list = document.querySelector('.list')

input.addEventListener('keyup',(e)=>{
    console.log(input.value)
    if(e.keyCode == 13){
        add.focus()
        addfun()
    }

})

function addfun(){
    add.addEventListener('click',()=>{
        const html = document.createElement('li')
        html.innerHTML = input.value
        console.log(html)
        setTimeout(()=>{
            list.insertBefore(html,list.firstElementChild)

        },100)    
        
    })
}





