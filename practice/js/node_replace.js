const btn = document.querySelector('.btn')
console.log(btn)
const old_box = document.querySelector('.old-box')

function repla(){
    btn.addEventListener('click',()=>{
        const oldh = old_box.innerHTML 
        console.log(oldh)
        btn.replaceChildren(old_box)
        old_box.replaceChildren(btn.innerHTML)
    })
}

repla()