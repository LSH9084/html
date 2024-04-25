// 수학 객체

console.log(Math.abs(1), Math.abs(-1)) //.abs(ㅁ) = -ㅁ + (2*|ㅁ|) 절대값으로 반환해준다.
console.log(Math.max(10,50,90,100))
console.log(Math.min(10,50,90,100))
console.log(Math.round(10.54)) 
console.log(Math.round(41.44)) //반올림
console.log(Math.floor(10.54)) //자리 내림
console.log(Math.ceil(10.54)) //자리 올림
console.log(Math.trunc(10.54)) //소수점 이하 무시
console.log(Math.PI)
console.log(Math.random())




for(i=1; i<=10; i++){
    console.log( Math.floor(Math.random()*10))
}

var arr_str = ['홍길순','길순이','덩길이','강감찬','이순신']


var rn = Math.floor(Math.random()*5) //0-4 난수 발생
console.log(arr_str[rn])

console.log(Math.pow(10,3))
console.log(Math.sqrt(4))

