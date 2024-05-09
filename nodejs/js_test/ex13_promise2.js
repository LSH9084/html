console.log("========")
//외부 데이터를 가져와 후속 처리 작업에 사용할 경우

console.log('await, async 두개는 쌍이다.')
// Promise.resolve()
//     .then(()=>{
//         new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('1번째 결과',new Date().toLocaleTimeString())
//                 resolve()
//             },3000)
//         })
//     })
//     .then(()=>{
//         new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log('2번째 결과',new Date().toLocaleTimeString())
//                 resolve()
//             },1000)
//         })
//     })

console.log("===await async적용시===")

async function start(){
    await new Promise((resolve)=>{
        const delayMsec = 2000*Math.random()
        setTimeout(()=>{
            console.log('1번째 결과',new Date().toLocaleTimeString())
            resolve()
        },delayMsec)
    })
    new Promise((resolve)=>{
        const delayMsec = 2000*Math.random()
        setTimeout(()=>{
            console.log('2번째 결과',new Date().toLocaleTimeString())
            resolve()
        },delayMsec)
    })
}

start()