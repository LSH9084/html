const parent1 = document.querySelector('.parent')
const input1 = document.querySelector('#input1')
const add = document.querySelector('.add')
const pp = document.querySelectorAll('#pp button')
const pn = document.querySelectorAll('.pn')
const up = document.querySelector('#up')
function addd(){
    add.addEventListener('click',()=>{
        const inputva = input1.value
        // console.log(inputva)
        if(inputva ==  "" || !inputva){
            alert('내용을 입력해주세요')
        } else {
            var html = document.createElement('div')
        html.innerHTML = `<p id="pp">${inputva}<button>X</button></p>`
        // console.log(html.innerHTML)
        parent1.appendChild(html,parent1.firstChild)
        }
        input1.value = ''
        setTimeout(()=>{
            input1.focus()
        },100)
        const pl = document.querySelectorAll('#pp')
        const up = document.querySelector('#up')
        // console.log(up)
        cb()
        repla()
    })
}
function foc() {
    input1.addEventListener('keyup',(e)=>{
        if(e.keyCode == 13){
            add.focus()
        }
    })
}
function funadd(){
    const pp = document.querySelectorAll('#pp button')
    for(let i=0 ; i<pp.length ; i++){
        pp[i].addEventListener('click',()=>{
            console.log(pp[i].childNodes)
            pp[i].parentNode.parentNode.remove()
        })
    }
}
function cb(){
    const pp = document.querySelectorAll('#pp button')
    // console.log(pp)
    funadd()
}

function repla(){
    const pl = document.querySelectorAll('#pp')
    const plL = pl.length
    if(plL>0){
        for(let i=0; i<pl.length; i++){
            console.log(pl[i].innerHTML)
                pl[i].addEventListener('click',()=>{
                    const plhm = pl[i].innerHTML.trim()
                    // alert('ii')
                    const up = document.querySelector('#up')
                    // console.log(plhm)
                    up.addEventListener('click',()=>{
                        console.log()
                        inputva = input1.value
                        pl[i].innerHTML = `${inputva}<button>X</button>`
                        const pp = document.querySelectorAll('#pp button')
                        console.log(pp)
                        cb()
                        // return;
                    })
    
                })
        }
    }  
}
addd()
foc()
// repla()








