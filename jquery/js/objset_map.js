const items = [10,20,20,20,30,40]
console.log(items)
items.push('길순이')
console.log(items)

// const userId = new Set([20,50,30,30])
// userId.add('10')
// userId.add('20')
// userId.add('20')
// userId.add('20')
// userId.add('20')
// userId.add('10')
// console.log(userId) //set은 중복을 허용하지 않는다.
var userId = new Set(items)
console.log(userId)
const valueSet = userId.values()
console.log(valueSet)
for(let value of valueSet){
    console.log(value)
}
userId.forEach((v)=>{
    console.log(v)
})
userId.delete(40)
console.log(userId)
userId.forEach((v)=>{
    console.log(v)
})
console.log("--Set : clear(값)")
userId.clear()
userId.forEach((v)=>{
    console.log(v)
})

const memberList = new Map()
memberList.set(1,'홍길동')
memberList.set(2,'홍길순')
memberList.set(3,'홍길이')
console.log(memberList)
// memberList.forEach((v)=>{
//     console.log(v)
// })

// console.log(memberList.get(3))
// console.log(memberList.has(2))
// console.log(memberList.delete(1))
console.log(memberList)
console.log(memberList.values())
console.log(memberList.entries())
memberList.forEach((v,k)=>{
    console.log('=====',v,k)
})
console.log(memberList.size)
const memberList2 = new Map([[1,'홍길동'],[2,'홍'],[3,'rhkd']])
console.log(memberList2,memberList2.size)
