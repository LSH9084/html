const parent = document.querySelector('#parent')
console.log(parent)

const firstChild = parent.firstElementChild
console.log(firstChild)
const secondChild = firstChild.nextElementSibling
console.log(secondChild)
const ThirdChild = secondChild.nextElementSibling
console.log(ThirdChild)

const lastChild = parent.lastElementChild
console.log(lastChild)

const preChild = lastChild.previousElementSibling
console.log(preChild)

const parent1 = lastChild.parentNode
console.log(parent1)



