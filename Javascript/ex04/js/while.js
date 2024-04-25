//특정구간을 반복처리 : for - > 일정한 횟수, while - > 조건

/*
한번도 수행하지 않을 수도 있음
1. while(조건식) {
    참인동안
    반복처리할 내용
}
*/
// var loop_cnt = -10

// while(loop_cnt>0) {
//     console.log('반복하기',loop_cnt)
//     loop_cnt--
// }

// console.log("while() outer")


/*
2. do {

} while() 조건문과 관계없이 최소 한번은 시행한다.

*/
var loop_cnt = -10
do {
    console.log("반복 처리")
} while(loop_cnt>0)