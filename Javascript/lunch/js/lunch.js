
const chMenu = ['자장면','꿔바로우','짬뽕','탕수육','야끼우동']
const koMenu = ['불백','찌개','감자탕','부대찌개','국밥','김밥','떡볶이','밀면','냉면']
const jaMenu = ['우동','라멘','돈까스','초밥']

// const allMenu1 = chMenu.concat(koMenu)
// const allMenu = allMenu1.concat(jaMenu)

// const allRMenu = Math.floor(Math.random()*allMenu.length)

// const allimg1 = chimg.concat(koimg)
// const allimg = allimg1.concat(jaimg)



const chimg = [
    '<img src="./img/jjajang.jpg">',
    '<img src="./img/QQuoba.jpg">',
    '<img src="./img/JJamBBong.jpg">',
    '<img src="./img/TangSu.jpg">',
    '<img src="./img/YaKKiUdong.jpg">'
]

const koimg = [
    '<img src="./img/bulback.jpg">',
    '<img src="./img/JJigae.jpg">',
    '<img src="./img/gamjatang.jpg">',
    '<img src="./img/budaeJJI.jpg">',
    '<img src="./img/gugbab.jpg">',
    '<img src="./img/gimbab.jpg">',
    '<img src="./img/DDeokbbok.jpg">',
    '<img src="./img/milmyeon.jpg">',
    '<img src="./img/nangmyeon.jpg">'
]

const jaimg = [
    '<img src="./img/Udong.jpg">',
    '<img src="./img/raman.jpg">',
    '<img src="./img/donGGas.jpg">',
    '<img src="./img/chobab.jpg">'
]







document.querySelector('.ch').addEventListener('click',()=> {
    
    chR()
})

function chR() {
    var chRMenu = Math.floor(Math.random()*chMenu.length)
    alert('중식')
    ir_html = ''
    ur_html = ''
    ur_html += `<h1>${chMenu[chRMenu]}</h1>`
    ir_html += `${chimg[chRMenu]}`
    document.querySelector('.result').innerHTML = ur_html
    document.querySelector('.img').innerHTML = ir_html
}

document.querySelector('.ko').addEventListener('click',()=> {
   
    koR()
})

function koR() {
    var koRMenu = Math.floor(Math.random()*koMenu.length)
    alert('한식')
    ir_html = ''
    ir_html += `${koimg[koRMenu]}`
    document.querySelector('.img').innerHTML = ir_html
    ur_html = ''
    ur_html += `<h1>${koMenu[koRMenu]}</h1>`
    document.querySelector('.result').innerHTML = ur_html
}

document.querySelector('.ja').addEventListener('click',()=> {
    
    jaR()
})

function jaR() {
    var jaRMenu = Math.floor(Math.random()*jaMenu.length)
    alert('일식')
    ir_html = ''
    ir_html += `${jaimg[jaRMenu]}`
    document.querySelector('.img').innerHTML = ir_html
    ur_html = ''
    ur_html += `<h1>${jaMenu[jaRMenu]}</h1>`
    document.querySelector('.result').innerHTML = ur_html
}



