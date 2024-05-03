var num = [10,20,30,40,50]
var sum = 0

console.log(num)
for (let i=0; i<num.length; i++){
    console.log(num[i])
    sum += num[i]
}

console.log(sum)

sum = 0
for(let e of num){
    sum += e
}

console.log(sum)

sum = 0
var num1 = [...num]
num1.forEach((e)=>{
    sum += e
})
console.log(sum)

sum = 0
var num1 = [...num]
console.log(num1.reduce((e)=> sum += e ))
