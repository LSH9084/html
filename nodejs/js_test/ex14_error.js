console.log("======")
const a = 10
console.log(`상수a의 값은 ${a}입니다.`)
const error1 = new Error('에러가 발생했습니다.')
console.log(error1.message)

function myFunction(params){
    if( typeof params !== 'number'){
        const error = new Error(`${params}은'Number' 타입이 아닙니다.`)
        alert(error.message)
        throw error
    }
}

myFunction(5)
myFunction('강감찬')