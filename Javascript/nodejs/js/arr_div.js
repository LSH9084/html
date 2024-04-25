//요소의 개별 변수에 분할대입 (할당)
let a,b,c
[a,b,c]=[1,2,3]
console.log(a,b,c)

console.log("----")

const arr = ['홍길동','홍길순']; //무조건 세미콜론을 넣어야 됨 다른건 대부분 안넣어도 인식이 되는데 넣는게 맞음
[arr[0], arr[1]] = [arr[1],arr[0]] //앞에걸 변수로 하고 = 하면 안됨
// console.log(arr)

//배열 섞기 (셔플) 
const arra = [1,2,3,4,5]
const arr_len = arra.length


//피셔 에이츠 알고리즘을 이용해서 난수 배열을 만들 수 있다.
// for (let i=arr_len-1; i>=0; i--){
//     const rnd = Math.floor(Math.random() * (i+1));
//     // console.log(i,rnd)
//     [arra[i], arra[rnd]]=[arra[rnd],arra[i]];
// }
// console.log(arra)

for (let i=0; i<arr_len; i++){
    const rrd = Math.floor(Math.random() * i);
    [arra[i],arra[rrd]]=[arra[rrd],arra[i]]
}

console.log(arra)

