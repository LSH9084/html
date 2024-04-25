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

const a = document.querySelectorAll('.btn')
console.log(a)


document.querySelectorAll('.btn').forEach((btn)=>{
    console.log(btn)
    btn.addEventListener('click', (e)=> {

        //console.log(e) // 실제 클릭한 버튼의 객체정보
        //alert('버튼 클릭: '+ e.target.dataset.age)
  
        //클릭한 버튼의 요소
        const button = e.target
        // 버튼 요소에서 data-age속성 가져오기
        const targetna =button.dataset.na
  
        // 조건처리
        const filterList = a.filter( (data)=> data.na == targetna )
  
        // 결과 값은 콘솔창 출력
        console.log("조건처리 결과:", filterList)
        filterList.forEach( (item) => {
          console.log(item.name, item.age)
        })
  
  
        // 결과 값은 웹문서 출력
        updateList(filterList)
  
    })
})