const arr1 = [] // 배열구조 변수 선언
const arr2 = [0,2,8] //배열 객체 초기화 선언
const arr3 = ['팽','돌','이']
const arr4 = [1,'홍길동',true,a,]  // 객체


console.log(arr4)

function a() {
    console.log(arr2)
}

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log('--배열 내 다른 배열/객체')

const arr5 = [ [0,1,22], [2,3,4] ]


console.log(arr5)
console.log(arr5[1][2],arr5[0][0])

console.log('-- 1차원 배열구조 반복자를 통해 데이터 연속읽기 --')
for (var key of arr4){
    console.log(key)
}

arr4.forEach((value)=>{console.log(value)})

for (i=0; i<arr4.length; i++){
    console.log(arr4[i])
}

const arr7 = arr2.concat(arr4)  
arr7[3] = 7
console.log(arr7)


console.log('2차원 배열 객체 데이터 읽기')

for(i=0; i<arr7.length; i++){
    console.log(arr7[i])
    for (j=0;j<arr7[i].length; j++){
        console.log(arr7[i][j])
    }
}

const arr6 = [{id:1, name:'홍길동'},{id:2 , name:'홍길순'}]
console.log(arr6)

console.log(arr6[0], arr6[1])
console.log(arr6[0].id,'+',arr6[0].name)


