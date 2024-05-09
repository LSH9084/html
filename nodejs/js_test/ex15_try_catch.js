// console.log("===에러 발생확인===")
// const a = 10
try {
    // a = 100
    // console.log(a)
} catch (e) {
    // console.log(`에러가 발생했습니다. ${e.message}`)
}

// console.log("=>",a)
// console.log("=====")

// // const b = 100
// // b = 2000
// // console.log(b)
// function generateError(){
//     var rnd = Math.random()
//     try{
//         if(rnd > 0.5){
//             throw new Error('에러발생')
//         } else {
//             console.log(rnd)
//             console.log('에러없음')
//         }
//     } catch (error){
//         console.log(error.message)
//     } finally {
//         console.log('에러 여부와 관계없이 무조건 수행')
//     }  
// } 
// setInterval(generateError,1500);

try {
    // let num null SyntaxError
    // console.log(b)  ReferenceError
} catch (error) {
    console.log(error)
}