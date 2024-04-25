// 진위 여부판별 : Boolean타입 = True or false 

console.log("==값이 있을 경우 판별")
const userName = '홍길동' // 변수에 값을 넣고 이프문을 쓰면 값이 있다면 true 값이 없으면 false로 판별
if (userName) {
    console.log("값 여부 판별:", userName, Boolean(userName))
}

console.log("0=>",Boolean(0))
console.log("1=>",Boolean(1))
console.log("-2=>",Boolean(-2))
console.log("3=>",Boolean(3))
console.log("!0=>",Boolean(!0))
console.log("!!0=>",Boolean(!!0))
console.log('홍길동', !'홍길동')
console.log(24, !24)
console.log([1,2,3], ![1,2,3])

const flg = "jjjja".includes('a')
console.log("a포함여부:", flg)

if (flg) 
    console.log('문자가 있습니다.')

//숫자는 0만 false고 그 외에는 전부 true 이다.

console.log("==비교연산자 결과: true/false")
const a = 10 ;
const b = 20 ;


console.log ( a > 10 ) ; 
console.log ( a < b ) ;


var userName2 
console.log("userName2 판별:", Boolean(userName2))

var userName2 = '1'
console.log("userName2 판별:", Boolean(userName2))









