const next_btn1 = document.querySelector('#next_btn1')
const slide_show = document.querySelector('.slide-show')
const sign_up = document.querySelector('#sign_up')
console.log(sign_up)

next_btn1.addEventListener('click',()=>{
    slide_show.style.left = '-500px'
})
sign_up.addEventListener('click',()=>{
    slide_show.style.left = '-1000px'
})
