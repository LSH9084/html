
// 합계, 카운터
// 변수 = 변수 + 숫자 => 숫자만큼 증가 => a = a + 1 => a += 1 => a++
// 숫자 1,2,3,4,... 생성

//1. 기억장소 확보, 초기화 작업
var count = 0

/* 반복수행
count = count + 1
console.log(count) // 1

count = count + 1 
console.log(count) // 2
*/
/*
for (i=1; i<=10; i++){
    // count = ++count // 1,2,3,4.....
    // count++
    // count = count + 1
    count += 1          //4개 다 똑같은 연산 값을 나타낸다.
    console.log(count)
}
*/
//합계 => s = s + a => a는 숫자 발생
// var sum = 0
// var a = 0
// a= a+1

// sum = sum + a
// console.log(sum)

// a= a+1
// sum = sum + a
// console.log(sum)

// a= a+1
// sum = sum + a 
// console.log(sum)

// a = a + 1 ; b = b + a ;

//1-10까지의 합
//숫자발생, 누적

var total = 0

for (i=1; i<=10; i+=2){
    total = total + i
    console.log(i, total)
}

