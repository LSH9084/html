const container = document.querySelector('.container')
console.log(container)

const myBox = document.querySelector('#myBox')
console.log(myBox)

setTimeout(()=>{
    container.appendChild(myBox)
},3000)

const container2 = document.querySelector('.container2')
const myBox2 = document.querySelector('#myBox2')
const myBox3 = document.querySelector('#myBox3')
const box2 = document.querySelector('#box2')

setTimeout(()=>{
    // container2.insertBefore(myBox2, container2.firstElementChild)
    container.after(myBox3)
},3000)

setTimeout(()=>{
    container2.insertBefore(myBox3, box2)
},6000)

setTimeout(()=>{
    container.removeChild(document.querySelector('.container div'))
},3000)

setTimeout(()=>{
    container.remove()
},3000)

