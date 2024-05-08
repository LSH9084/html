console.log('===비동기화 Promise===')
console.log('1.promise생성자 인자: 비동기처리 작업을 하는 함수를지정(사용) 함수 내부에서 비동기 처리완료 메소드인 resolve()호출')
console.log('Promise인스턴스의 then()을 사용해 resolve()실행후의 작업을 처리')
console.log('===Promise의 형식===')
// const promise = new Promise( (resolve)=>{
//     setTimeout(()=>{
//         resolve('orange')
//     },1000)
// })
// promise.then((a)=>{
//     console.log(a)
// })

console.log('===')


// const promise2 = new Promise((resolve,reject)=>{
//     let flag = false
//     if(flag == true){
//         resolve('orange')
//     } else {
//         reject('apple')
//     }
// })

// promise2.then((a)=>{
//     console.log(a)
// })
// promise2.catch((a)=>{
//     console.log(a)
// })

// const promise3 = new Promise((resolve,reject)=>{
//     let flag = false
//     if(flag == true){
//         resolve('orange')
//     } else {
//         reject('apple')
//     }
// }).then((result)=>console.log(result)).catch((result)=>console.log(result))

console.log('===Promise.all(배열):다수의 Promise병렬 실행')
const arrFunc = []
var count = 0
for(let i=0; i<5; i++){
    const func = (resolve)=>{
        console.log(`처리:${i}시작`,new Date().toLocaleTimeString())
        const delayMsec = 2000 * Math.random()
        setTimeout(()=>{
            count++
            console.log('count:'+count)
            console.log(`처리 ${i}끝`,new Date().toLocaleTimeString())
            resolve()  //코드가 정상 처리 되었다.
        },delayMsec)
        for(var t=0; t<2; t++){
            console.log(t)
        }
       
        
    }
    arrFunc.push(func)     
}
console.log('-->저장된 배열:')
// arrFunc.forEach((e)=>{
//     console.log(e)
// })

const arrPromise = arrFunc.map((func)=> new Promise(func))
console.log('Promise 배열로 전부 동시에 작업이 시작됨 전환')

Promise.all(arrPromise).then(()=>{
    console.log('모든 작업이 완료되었습니다.')
})



