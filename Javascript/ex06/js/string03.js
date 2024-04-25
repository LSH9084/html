// 문자열 나누기
const myUrl = "http://example.com/?id=12345&name=Lion&age=28"
myUrl.split('&') // '특정 문자를 기준으로 분리하여 배열구조 전환
console.log(myUrl.split('&'))

const url_arr = myUrl.split('&')  

// console.log(url_arr) 이거는 실제 데이터가 아니고 보여주는 용임 밑의 [1],[0] 이런식으로 써야지 실제로 데이터를 받아갈 수 있음
console.log(url_arr[0])
console.log(url_arr[1])
console.log(url_arr[2])

for (var v of url_arr){
    console.log(v)
}
// 위와 아래는 기본적으로 비슷한데 아래는 함수식을 매개변수로 쓸 수 있다.
console.log("--forEach()") 
url_arr.forEach((value)=>{console.log(value)})

console.log("-- for")
for (i=0; i<url_arr.length; i++){
    console.log(url_arr[i])
}

var url_arr2 = myUrl.split(/&|\?/)  //& 또는 ?가 있으면 분리시켜라
//    /& 또는(|) \?/ 이것
url_arr2.forEach( v => console.log(v))  

// 인수에 공백 ('')을 지정하면 한 글자식 분리하여 배열로 반환
console.log('javascript'.split(''))

// 정규식 표현 => /패턴/ test(문자열) => true / false
console.log('--정규식표현')
console.log( /\d{3}-\d{4}-\d{4}/.test('010-1234-1234'))
console.log(/\d{4}-\d{3}-\d{4}/.test('010-2448-4848'))

console.log(/j/.test('javascript'))
console.log('/^ip/',/^ip/.test('javascript'))
console.log('/^y/',/^y/.test('javascript'))
console.log('/^j/',/^j/.test('javascript'))
console.log('/\d/',/\d/.test('javascript'))
console.log('/java.*/',/java.*/.test('javascript'))

//소수점 자리수 지정
console.log((0.355333).toFixed(2))
var num1 = 0.355333.toFixed(2)   //반올림해줌
console.log(num1, typeof(num1))
console.log((2.4).toFixed(4))
console.log((0.3555333333).toPrecision(2))

//문자열 URI 이스케이프 (escape)처리
var url3 = 'http://example.com/홍길동페이지.html'
var url3_ecode1 = encodeURI(url3)   // "/?&+=@$;,#" 이런걸 처리못함
var url3_ecode2 = encodeURIComponent(url3)  //얘는 다 처리함
console.log(url3)
console.log(url3_ecode1)
console.log(url3_ecode2)

var decode1 = decodeURI(url3_ecode1)    //디코딩
var decode2 = decodeURIComponent(url3_ecode2) //디코딩

console.log(decode1)
console.log(decode2)

