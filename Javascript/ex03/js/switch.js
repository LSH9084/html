/*
switch문 : 조건을 만족하는 다수의 데이터를 처리

switch(식){
    case 값 : 처리
        처리
        break
    case 값 :
        처리
        break
    default :
        처리
}
*/

// let num1 = 1

// switch(num1){
//     case 1:
//         console.log('숫자:',num1)
//         break
//     case 2:
//         document.write('숫자:',num1)
//         break
//     case 3:
//         console.log('숫자:',num1)
//         break
//     default :
//         console.log('IDontKnow')
    
    
// }

let str1
str1 = prompt("영문자1개 입력:","a")
console.log(str1)


switch(str1){
    case "a" :
    case "A" :
        document.write("A")
        break
    case "b" :
    case "B" :
        document.write("B")
        break
    default :
        document.write("anything")
}

let num1 = 1

switch(num1){
    case 1:
    case 2:
    case 3:
    case 4:
        document.write('숫자:',num1)
        break
    case 5:
    case 6:
    case 7:
        console.log('숫자:',num1)
        break
    default :
        console.log('IDontKnow')
    
    
}
// 1<=num1<=4  5<=num1<=7 <<이런뜻