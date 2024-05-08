console.log('===JSON의 범용적인 데이터 형식===')
/*
{
    "age": 40,
    "grade": 4,
    "classes": [
        {"name":'홍길동',"address":'busan'},
        {"name":'홍길동',"address":'busan'},
    ]
}
*/

const data = `{"name" : "길순이","age" : 20}`
const info = JSON.parse(data)
console.log("JSON형식의 문자열:",data)
console.log("JSON객체:",info)
console.log(info.name, info.age)

console.log("JSON객체 => 문자열 전환")
const info_string = JSON.stringify(info)
console.log("문자열로 변환:",info_string)

console.log("===JSON 커스터마이징===")
const obj = {
    pref: "seoul",
    flag: true,
    orange:100,
    apple:100,
}

str1 = JSON.stringify(obj)
console.log(str1)
const str1_json = JSON.parse(str1)
console.log(str1_json)
const replacer = (a,value)=>{
    if(typeof value === 'boolean'){
        return undefined;
    }
    return value
}
str2 = JSON.stringify(obj, replacer, '  ')
console.log("정렬하기",str2)