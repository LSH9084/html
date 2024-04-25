//독립된 단위 프로그램




//함수 정의
// 1,인자가 없는 함수
// function numberPrint() {
//     for (i=1; i<=3; i++){
//         console.log(i)
//     }
// }
//2, 인자가 있는 함수
// let start = prompt("시작 숫자를 입력해주세요")
// let end = prompt("종료 숫자를 입력해주세요")
// function numberPrint2(start, end) {
//     for (i=start; i<=end; i++){
//         console.log(i)
//     }
// }

// numberPrint2(start, end)


//3, 인자가 있고, 반환값이 있는 함수
function sum(num1, num2){
    return (num1+num2)
}

let result = sum(1000,10)
console.log(result)


//4.가변 인자
function calcSum(...values){ //배열 구조 => values[0],values[...] values값들을 하나씩 끄집어 내어 value저장
    for (const value of values){
        console.log(value)
    }
}


calcSum(10,20,30,40)
calcSum(10)
calcSum(10,30)
calcSum(10,30,10)
//함수 호출

    
// numberPrint() // ()꼭 붙여서 해야 함수로서 작동 함수 정의를 앞에서 하든 뒤에서하든 상관없이 적용된다 자체적으로 먼저 코딩된다. 




