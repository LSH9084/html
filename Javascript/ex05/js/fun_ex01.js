// myPrn("*")
// myPrn("@")
// myPrn("#")

// 1. 함수 정의
// function myPrn(str) {
//     for(i=1; i<=10; i++){
//     document.write(str)
//     }
//     document.write("<hr>")
// }


//2. 익명 함수 선언은 호출보다 무조건 먼저 해야한다.

// var myPrn2 = (str) => {
//     for(i=1; i<=10; i++){
//         document.write(str)
//         }
//         document.write("<hr>")
// } 

// myPrn2('/')

//3. 

// function mySum(s, e){
//     if (s>e){
//         alert("인자값이 문제가 있습니다.")
//         return
//     }
//     var sum = 0
//     for (i=s; i<=e; i++){
//         sum += i
//     }
//     document.write(sum)
// }

// mySum(10,11)
// document.write("<hr>")
// mySum(1,10)
// document.write("<hr>")
// mySum(1,110)

// var mySum2 = (s,e) => {
//     if (s>e){
//         alert("인자값이 문제가 있습니다.")
//         return
//     }
//     var sum = 0
//     for (i=s; i<=e; i++){
//         sum += i
//     }
//     document.write(sum)
// }
// var tot = mySum2(1,11)
// document.write(`<h3>${tot+10000}</h3>`)

// mySum2(1,10)
// document.write("<hr>")
// mySum2(1,100)
// document.write("<hr>")
// mySum2(1,1000)

var return_str = () => "홍길동 만세"
var return_num = (num1) => num1*num1
var return_num2 = (num2) => { return num2*num2 }
document.write(return_str())
document.write("<hr>")
document.write(return_num2(119))


//전역 변수 : 함수 밖에서 선언한 변수
//지역 변수 : 함수 내에서 선언한 변수
var name1 = "홍길순"  // 전역 변수
function fun_local () {
    var name2 = "홍길동" // 지역 변수
    name3 = "강감찬" //함수 안에서 전역 변수 선언시 var 키워드를 생략하면 된다.
    console.log("name1:"+name1,name3)
    console.log("name2:"+name2,name3)
}
function fun_local2 () {
    var name2 = "동길이" // 지역 변수
    console.log("name1:"+name1,name3)
    console.log("name2:"+name2,name3)
}

fun_local()
fun_local2()
console.log(name1,name3) //name2는 함수 내에서만 사용 가능한 변수 (블록 단위로 변수가 적용됨)java에서도 나옴

