const weatherInfo = document.querySelector('#weather-info')
// console.log(weatherInfo) 점검
//텍스트요소 읽기,변경
console.log(weatherInfo.textContent)  //innerHTML을 쓰면 태그까지 다 긁어온다.
console.log(weatherInfo.innerHTML)

// weatherInfo.textContent = '기온은<string>-3도</string>가 예상'
// weatherInfo.innerHTML = '기온은<string>-3도</string>가 예상'  //두개 차이 비교

console.log(weatherInfo.outerHTML)
weatherInfo.outerHTML = "<div>Hello</div>"
const imgEL = document.querySelector('#img')
const anchorEL = document.querySelector('#anchor')
console.log(imgEL,anchorEL)

console.log('a href:',anchorEL.href)
console.log('a id:',anchorEL.id)
console.log('img src:',imgEL.src,'img width:',imgEL.width)
const changeBtn = document.querySelector('#change')

changeBtn.addEventListener('click',()=>{
    anchorEL.href = "http://www.naver.com"
    anchorEL.textContent = "네이버"
    anchorEL.target = "blank"
    // imgEL.setAttribute('src','./img/2.jpg') 바로 밑이랑 같은 것
    imgEL.src = "./img/2.jpg"
    console.log(imgEL.getAttribute('src'))
})

const aEL = document.querySelectorAll('#links a')
console.log(aEL)
aEL.forEach((e)=>{
    // console.log(e.href)
    // console.log(e.target)
    if(e.hasAttribute('target') == false){
        alert(e.getAttribute('target'))
    }
    if (e.getAttribute('target') !== '_blank'){
        return
    }
})

const node = document.querySelectorAll('#node')
// console.log(node)

