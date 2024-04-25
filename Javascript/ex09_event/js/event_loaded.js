

//Dom액세스 타이밍에 처리 실행
//DOMContentloaded : 페이지가 표시되는 시점 [맨앞에 script 링크를 걸면 이걸 써줘야 써진다.]
//'load' : 모든 페이지 내 모든 리소스 (진짜 모든것 사진영상,,,....)가 로딩이 된 후 발생
// window.addEventListener('DOMContentLoaded',()=>{
//     var a = document.querySelectorAll('.container .box')
//     console.log(a)

//     var b = [...a];
//     var c = b.filter((v)=> v.classList[1] == 'box1')
//     console.log(c)

//     var d = c.length
//     console.log(d)
// })

var a = document.querySelectorAll('.container .box2')
console.log(a)

var b = [...a];
var c = b.filter((v)=> v.classList[1] == 'box1')
console.log(c)

var d = c.length
console.log(d)

console.log(b.length)
console.log(b)

for(i=0; i<3; i++){
    var c = b.filter((v)=> v.classList[i]=='box2')
    console.log(c)
}


