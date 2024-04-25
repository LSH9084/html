// 1-10까지의 짝수의 합과 홀수의 합을 구하시오
// 1. 기억장소 확보
// 2. 숫자 생성
// 3. 짝수/홀수 판별 누적

var sum1 =0
var sum2 =0

// for (i=1; i<=10; i+= 2){
//     sum1 = sum1 + i
//     console.log(sum1)
// }


// for (j=2; j<=10; j+=2){
//     sum2 = sum2 +j
//     console.log(sum2)
// }

for (i=1; i<=10; i++){
    if (i%2 ==0){
        console.log("짝수:"+i)
        sum1 += i 
    }   else {
        console.log("홀수:"+i)
        sum2 += i
    }
}

console.log(`짝수의 합:${sum1},홀수의 합:${sum2}`)