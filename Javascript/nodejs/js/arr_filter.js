//배열.filter(콜백함수)
//조건을 만족하는 데이터의 배열 생성
const num1 = [10,20,30,40]
const newArr = [10,20,30,40].filter((v)=> v>=30)
console.log('30이상:',newArr)

const newArr2 = num1.filter( function(v) { return v <=30})
console.log('30이하:',newArr2)