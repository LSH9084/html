const nodes = document.querySelector('.nodes')
const number = document.querySelector('.number')
const parent = document.querySelector('.numbers')
const btns = document.querySelectorAll('#buttons button')
console.log(btns)
const firstChild = parent.firstElementChild
const lastChild = parent.lastElementChild
const nextChild = lastChild.previousElementSibling
const preChild = nextChild.previousElementSibling
const parenti = lastChild.parentNode

const btnss = [...btns]

btnss.forEach((v)=>{
    console.log(v)
    funcc(v)
})

function funcc(v) {
    v.addEventListener('click',(e)=>{
        console.log(e.target.id)
        const target = e.target.id
        switch(target){
            case "btn1" : 
                alert(firstChild.innerText)
                break;

            case "btn2" : 
                alert(lastChild.innerText)
                break;

            case "btn3" : 
                alert(nextChild.innerText)
                break;

            case "btn4" : 
                alert(preChild.innerText)
                break;

            case "btn5" : 
                alert(parenti.classList)
                break;
        }
    })
}