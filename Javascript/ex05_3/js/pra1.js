const idInput = document.querySelector('.idInput')
const psInput = document.querySelector('.psInput')

idInput.addEventListener('focus',(e)=>{
    cleFun1(e)
})
psInput.addEventListener('focus',(e)=>{
    cleFun1(e)
})

function cleFun1(e){
    e.target.value = ''
}

