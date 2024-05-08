var num = [10,20,30,40,50]
var sum = 0

console.log(num)
for (let i=0; i<num.length; i++){
    console.log(num[i])
    sum += num[i]
}

console.log("for(제어문): sum=",sum)

sum = 0
for(let e of num){
    sum += e
}

console.log("for(변수 of 배열) :sum=",sum)

sum = 0
var num1 = [...num]
num1.forEach((e)=>{
    sum += e
})
console.log("배열.forEach :sum=",sum)

sum = 0

console.log("배열.reduce() :sum =>",num1.reduce((a,b)=> a+b))
