const myForm = document.querySelector('#myForm')
console.log(myForm)
myForm.addEventListener('submit',handleSubmit)
function handleSubmit(e){
    e.preventDefault()
    const isYes = confirm('이 내용으로 전송하시겠습니까?')
    if(isYes == true){
        e.target.action = '../ex5_1/ex06_other4.html'
        // e.target.method = 'post'
        e.target.submit()
    } else return;
}
