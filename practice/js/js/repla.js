const repBtn = document.querySelector('#repBtn')
const oldBox = document.querySelector('.old-box')
console.log(repBtn, oldBox)
const copyBtn = document.querySelector('#copyBtn')
console.log(copyBtn)

repBtn.addEventListener('click', ()=>{
    var newBox = document.createElement('div')
    newBox.textContent = '새로생성된 박스'
    newBox.classList.add("new-box")

    console.log("create div:",newBox)
    oldBox.replaceWith(newBox)
})

copyBtn.addEventListener('click',()=>{
    var cloneBox = oldBox.cloneNode(true)
    document.querySelector('.container').appendChild(cloneBox)
    console.log(cloneBox)
})
