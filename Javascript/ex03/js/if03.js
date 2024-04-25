// 입력한 숫자가 3의 배수이서 수 6의 배수인 숫자 판별하기
// let A = prompt("숫자를 입력해 주세요","")



// if (A%3 == 0 && A%6 == 0)
//     console.log ("6의 배수입니다.")
// else if (A%3 ==0)
//     console.log ("3의 배수입니다.")
// else 
//     console.log ("3의 배수도 6의 배수도 아닙니다.")



// if (A%3 == 0 && A%6 == 0)
//     document.write(`숫자 ${A}는 3의 배수이면서 6의 배수입니다.`)
// else 
//     document.write(`숫자 ${A}는 3의 배수이면서 6의 배수가 아닙니다.`)


var A = prompt("숫자를 입력해 주세요")


switch(A) {
    case "3의 배수" :
        A%3==0
        console.log("3의 배수 입니다.")
        break
    case "6의 배수" :
        A = B%6 == 0
        console.log("6의 배수 입니다.")
        break
    case "3의 배수 이면서 6의 배수" :
        A = B%3 == 0 && B%6 ==0
        break
    default :
        console.log("3의 배수도 6의 배수도 아닙니다")
}



/*
var isOK = confirm("정말로 회원탈퇴를 진행하시겠습니까?")
console.log(isOK)

if (isOK){
    document.write("탈퇴 처리하였습니다.")
} else {
    document.write("탈퇴 처리를 취소하였습니다.")
}

*/

//입력한 숫자가 양수 , 0 , 음수 판별

// var A = prompt("숫자를 입력해주세요","0")
// console.log (A)

// if (A>0)
//     document.write ("A는 양수 입니다.")
// else if (A<0)
//     document.write ("A는 음수 입니다.")
// else 
//     document.write ("A는 0 입니다.")

