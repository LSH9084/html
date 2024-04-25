const foo = document.querySelector('#foo')
foo.innerHTML = "foo선택하기"

const itemC = document.querySelector('.item:nth-child(3)')
console.log(itemC)
// itemC.innerHTML = `<a href='http://www.google.com' >구글</a>`

const itema = document.querySelectorAll('.item')
const items = document.getElementsByClassName('item')
console.log(itema)

for(let e of itema){
    console.log(e)
}

console.log('====')

for(let idx=0; idx<itema.length;idx++){
    console.log(itema[idx])
}


console.log('------')

var listCnt = itema.length;
console.log(listCnt)
var list_href = [
    "https://google.com",
    "https://naver.com",
    "https://daum.net"
]

itema.forEach((v,i)=>{
    console.log(v,i)
    v.style.border = '1px solid red'
    v.style.padding = '5px'
    v.style.margin = '10px'
    nFunc(v,i)
})

function nFunc(v,i){
    
    v.addEventListener('click',()=>{
        alert(v.innerText)
        location.href = list_href[i]
        
    })
    v.addEventListener('mouseover',()=>{
        v.style.cursor = 'pointer'
        v.style.color = 'purple'
        v.style.backgroundColor = 'gray'
        
        // v.style.cursor = ''
    })
    v.addEventListener('mouseout',()=>{
        v.style.color = 'blue'
        v.style.backgroundColor = 'darkGray'
    })
}


console.log('-----')

console.log('html요소 읽기:',document.documentElement)

console.log('-----')

console.log('body요소 읽기:',document.body)

console.log('head요소 읽기:',document.head)

const scriptElement = document.createElement('script')
scriptElement.src = 'js/import01.js'
document.head.appendChild(scriptElement)

scriptElement.type = 'text/javascript'