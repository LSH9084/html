//배열의 요소를 계산하여 하나의 값을 생성
//배열.reduce(콜백함수,[초기화])
const priceList = [100,200,300]

console.log('--for문 합계')
priceSum =0
for ( i=0; i<priceList.length; i++){
    priceSum += priceList[i]
    console.log(priceList[i],priceSum)
}
console.log('--확장 for문 합계')
priceSum = 0
for (let data of priceList) {
    priceSum += data
    console.log(data, priceSum)
}

console.log('-- reduce():합계')
priceSum = 0 //그냥 초기화 시켜준거 앞에 변수 하나로 다하는거라 별 의미 없음

priceSum = priceList.reduce((v,x,index)=>{ 
    console.log('idx:'+index+'v:'+v+'x:'+x)
    return v+x
},0)

console.log(priceSum)

let fac = [1,2,3,4,5].reduce((a,b)=> a*b,1)
console.log('fac:',fac)


//2차원 배열 - > 1차 배열 전환 => 플래트닝(flattening)
const arr = [['바나나','사과','딸기'],['귤','포도']]
console.log(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr[0][0])
console.log(arr[0][1])

const flattenedArr = arr.reduce((a,b)=> a.concat(b))
console.log(flattenedArr)
for (let data in flattenedArr){
    console.log(flattenedArr[data])
}

