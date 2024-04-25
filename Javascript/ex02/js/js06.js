
/*
연산식 : 산술식, 관계연산, 논리연산,....
산술식 => 
이항연산 : +,-,*,/ 사칙연산+ (% <=나머지), **(제곱)
단항연산 : ++(1씩 증가),--(1씩 감소) 
관계연산 : >, >=, <, <=, ==(같음), !=(같지않다) 관계연산의 결과는 true,false만 나옴
논리연산 : &&(and),||(or),!(not),^(xor)
&&: 둘 다 진실일때 true
||: 둘 중 하나 이상이 진실일때 true
! : 둘의 boolean값이 서로 다를때 true
^ : 둘 중 단 하나만 진실일때 true
삼항연산자 : 조건식 ? true경우처리 : false인 경우 처리
복합형 대입연산자 
+=, -= , *=, /= , %=, **=
*/



//1. 기억 장소 선언
let num1 = 10 , num2 = 3 ;
let add, sub, mul, div, mod, pow ;
add = num1 + num2 ;
sub = num1 - num2 ;
mul = num1 * num2 ;
div = num1 / num2 ;
mod = num1 % num2 ;
pow = num1 ** num2 ;

console.log("num1+num2=",add)
console.log("num1-num2=",sub)
console.log("num1*num2=",mul)
console.log("num1/num2=",div)
console.log("num1%num2=",mod)
console.log("num1**num2=",pow)
console.log(add,sub,mul,div,mod,pow)

let num3 = 10
console.log("num3="+ num3++)
console.log(num3)

console.log(5>2)
console.log("5=='5'",5==5)
console.log("5=='5'",5==='5')  //==와 ===의 차이는 ===는 타입또한 포함하여 동일하여야 같은 데이터로 본다

let a = 10
let b = 5
console.log(5<2 || a>b)

console.log(5>2 && 5>3 && 5>1)
console.log("&&(and)=>" , 5>2 && 5>3 && 5<1)
console.log("||(or)=>",5<2 || 5<3 || 5>1)
console.log("!=(not) =>",5>2 != 5<3)
console.log("^(xor) =>", false ^ true)
console.log("^(xor) =>", 5>2 ^ 5<1)
// ^(xor)은 javascript에서는 값이 1,0으로 나오는데 1이 true 0이 false를 나타낸다.(정확히 말하면 0을 제외한 다른 숫자들은 모두 true를 나타낸다)
//우선순위는 not and or 순이다.

console.log(10 > 2 ? "10은 2보다 크다": 1000)
// 앞의 ()안의 전제가 참이 나오면 "앞에 문자열을 출력하고
// 앞의 ()안의 전제가 거짓이 나오면 "뒤의 문자열을 출력

let num5 = 100 ; 
num5 += 100
console.log(num5)
num5 /= 100
console.log(num5)
num5 %= 3
console.log(num5)
num5**= 4
console.log(num5)
num5 -= 10
console.log(num5)
num5 += 1 && ++num5





