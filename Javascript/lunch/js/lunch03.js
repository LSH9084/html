const cookList = [
    {na:'japan', name:'우동', img:'<img src="./img/Udong.jpg">' },
    {na:'japan', name:'라멘', img:'<img src="./img/raman.jpg">'},
    {na:'japan', name:'돈까스' ,img:'<img src="./img/donGGas.jpg">'},
    {na:'japan', name:'초밥', img:'<img src="./img/chobab.jpg">'},
    {na:'china', name:'짜장면', img:'<img src="./img/jjajang.jpg">'},
    {na:'china', name:'꿔바로우', img:'<img src="./img/QQuoba.jpg">'},
    {na:'china', name:'짬뽕', img:'<img src="./img/JJamBBong.jpg">'},
    {na:'china', name:'탕수육', img:'<img src="./img/TangSu.jpg">'},
    {na:'china', name:'야끼우동', img:'<img src="./img/YaKKiUdong.jpg">'},
    {na:'korea', name:'불백', img:'<img src="./img/bulback.jpg">'},
    {na:'korea', name:'찌개', img:'<img src="./img/JJigae.jpg">'},
    {na:'korea', name:'감자탕', img:'<img src="./img/gamjatang.jpg">'},
    {na:'korea', name:'부대찌개', img:'<img src="./img/budaeJJI.jpg">'},
    {na:'korea', name:'국밥', img:'<img src="./img/gugbab.jpg">'},
    {na:'korea', name:'김밥', img:'<img src="./img/gimbab.jpg">'},
    {na:'korea', name:'떡볶이', img:'<img src="./img/DDeokbbok.jpg">'},
    {na:'korea', name:'밀면', img:'<img src="./img/milmyeon.jpg">'},
    {na:'korea', name:'냉면', img:'<img src="./img/nangmyeon.jpg">'}
]

document.querySelectorAll('.btn').forEach((btn)=>{
    console.log(btn)
    btn.addEventListener('click',(e)=>{
        const button = e.target
        targetNa = button.dataset.na
        var filterList = cookList.filter((v)=> v.na == targetNa)
        console.log("조건처리 결과:", filterList)
        filterList.forEach( (item) => {
            console.log(item.name, item.img, item.na)
          })
          updateList()
    })
})

function updateList(filterList){
    var filterList = cookList.filter((v)=> v.na == targetNa)
    
    var RNum = Math.floor(Math.random()*filterList.length)
    // console.log(RNum)
    var re_html = `<h1>${filterList[RNum].name}</h1>`
    document.querySelector('.result').innerHTML = re_html

    var re_html1 = `${filterList[RNum].img}`
    document.querySelector('.img').innerHTML = re_html1

  }