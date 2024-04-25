// const up20 = document.querySelector('.button20')
// const up30 = document.querySelector('.button30')
// const up40 = document.querySelector('.button40')

// up20.addEventListener('click', ()=> {
//     up20fun()
// }) 

// up30.addEventListener('click', ()=> {
//     up30fun()
// }) 

// up40.addEventListener('click', ()=> {
//     up40fun()
// }) 

// const userList = [
//     { name:'곰',age:19 },
//     { name:'사자',age:25 },
//     { name:'호랑이',age:27 },
//     { name:'여우',age:33 },
//     { name:'양',age:34 },
//     { name:'치킨',age:49 },
//     { name:'인간',age:30 }
// ]

// const Ages20 = userList.filter((v)=> {return v.age >= 20 }) 
// const Ages30 = userList.filter((v)=> {return v.age >= 30 } ) 
// const Ages40 = userList.filter((v)=> {return v.age >= 40 } ) 

// function up20fun() {
//     alert('20세 이상입니다.')
//     ul_html = ''
//     for ( i=0; i<Ages20.length; i++){
//         ul_html += `<li>${Ages20[i].age+':'+Ages20[i].name}</li>`
//     }
//     document.querySelector('.user_list').innerHTML = ul_html
    
// }

// function up30fun() {
//     alert('30세 이상입니다.')
//     ul_html = ''
//     for ( i=0; i<Ages30.length; i++){
//         ul_html += `<li>${Ages30[i].age+':'+Ages30[i].name}</li>`
//     }
//     document.querySelector('.user_list').innerHTML = ul_html
// }

// function up40fun() {
//     alert('40세 이상입니다.')
//     ul_html = ''
//     for ( i=0; i<Ages40.length; i++){
//         ul_html += `<li>${Ages40[i].age+':'+Ages40[i].name}</li>`
//     }
//     document.querySelector('.user_list').innerHTML = ul_html
// }


// 유사 배열 => 배열 전환
const allDiv = document.querySelectorAll('.spread_box > div')
console.log(allDiv.length)

for (let v of allDiv){
    console.log(v)
}

console.log(allDiv[0])

for(i=0; i<allDiv.length;i++){
    console.log(allDiv[i])
}
const filter_arr = [...allDiv]
const filter_ex = filter_arr.filter((e)=> {return e.classList.contains('on') })
//스프레드 연산(...): 유사배열 -> 배열 전환을 해줌

console.log(filter_ex[0])

const myString = '안녕하세요'
console.log([...myString])

const newString = [...myString].map((v)=> v+'이' )
console.log(newString)

const newString2 = newString.reduce((a,b)=>a+b)
console.log(newString2)

console.log("---유사 배열 => 배열 => map() ->reduce()")
const str1 = [...myString]
            .map ((v)=> `${v}!`).reduce ((a,b)=> a+b)

console.log('배열.map().reduce():',str1)


