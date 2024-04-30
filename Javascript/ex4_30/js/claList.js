const classBox = document.querySelector('.class_box')
const redBox = document.querySelector('.red')
const blueBox = document.querySelector('.blue')
const toggleBtn = document.querySelector('#toggle')
console.log('class속성 값:',classBox.getAttribute('class'),redBox.getAttribute('class'),blueBox.getAttribute('class'))
classBox.classList.add("blue","red")
redBox.classList.add("blue")
blueBox.classList.add("red")
classBox.classList.remove("blue","red")
console.log(blueBox.classList.contains('red'))
if(blueBox.classList.contains('red')==true){
    console.log(blueBox)
}
const addBtn = document.querySelector('#add')
const removeBtn = document.querySelector('#remove')
const Btn = document.querySelectorAll('.class_box button')
console.log(Btn)
const Btn1 = [...Btn]

Btn1.forEach((e)=>{
    e.addEventListener('click',()=>{
        let gubun = e.getAttribute('id')
        if(gubun === 'add'){
            addFun()
        } else if(gubun === 'remove'){
            removeFun()
        } else if(gubun === 'toggle'){
            toggleFun()
        }
    })
})

function addFun() {
    const prAd = prompt('속성값을 입력해주세요',"")
    classBox.classList.add(prAd)
}
function removeFun() {
    const prRemove = prompt('속성값을 입력해주세요',"")
    if(prRemove){
    classBox.classList.remove(prRemove)
    } else {
        alert('속성값이 없습니다.')
    }
}
function toggleFun() {
    classBox.classList.toggle('box')
}


// addBtn.addEventListener('click',()=>{
//     const prAd = prompt('속성값을 입력해주세요',"")
//     classBox.classList.add(prAd)
//     // redBox.classList.add('small_box')
//     // blueBox.classList.add('small_box')
// })
// removeBtn.addEventListener('click',()=>{
// //     const prRemove = prompt('속성값을 입력해주세요',"")
// //     if(prRemove){
// //     classBox.classList.remove(prRemove)
// //     } else {
// //         alert('속성값이 없습니다.')
// //     }
//         redBox.classList.remove('small_box')
//         blueBox.classList.remove('small_box')
// })
// toggleBtn.addEventListener('click',()=>{
//     classBox.classList.toggle('box')
// })


// Btn1.forEach((e)=>{
//     console.log(e.id)
//     e.addEventListener('click',()=>{
//         if(e.id == 'add'){
//             const prAd = prompt('속성값을 입력해주세요',"")
//             classBox.classList.add(prAd)
//         } else if(e.id == 'remove'){
//             redBox.classList.remove('small_box')
//             blueBox.classList.remove('small_box')
//         } else if(e.id == 'toggle'){
//             classBox.classList.toggle('box')
//         }
//     })
// })