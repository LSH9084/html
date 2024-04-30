const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
console.log(input1)
const add = document.querySelector('.add')
const parent1 = document.querySelector('.parent')



add.addEventListener('click',()=>{
    var inputVa = input1.value
    console.log(inputVa)
    const html = document.createElement('div')
    html.innerHTML = `<input id="input3" type="text" class="form-control" value="${inputVa}"  aria-label="Recipient's username" aria-describedby="button-addon2">
    <button id="remove" class="${inputVa}btn1 btn-outline-secondary" type="button" id="button-addon2">X</button>`
    parent1.appendChild(html, parent1.lastElementChild)   
    var remove1 = document.querySelectorAll('#input3')
    var remove = [...remove1]
    console.log(remove)
    reM()
})

function reM(){
    var inputVa = input1.value
    console.log(inputVa)
    // var remove1 = document.querySelectorAll('#input3')
    // var remove = [...remove1]
    for(let i=0; i<remove.length; i++){
        if(remove.length>0){
            console.log(remove[0])   
        remove[i].addEventListener('click',(e)=>{
            alert(remove[i].value)
            remove[i].parentElement.remove()
        })
        } 
        
        
    }
}



function fo(){
    input1.addEventListener('keyup',(e)=>{
        if(e.keyCode == 13){
            add.focus()
        }
    })
}

fo()