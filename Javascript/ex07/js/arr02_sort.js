const arr = [2,1,3,9]
const arr2 = arr.concat() //배열 복사하는법
const arr3 = arr2.concat()
arr.sort()
arr2.reverse()
console.log("오름차순:",arr)
console.log("내림차순:",arr2)

// arr.sort(function(a,b){
//     return a - b  //오름차순
// })

// arr2.sort (function (a,b){
//     return b - a //내림차순
// })

// console.log(arr3.sort())

// arr3.reverse()
// console.log(arr3)

// //문자일 경우
// const arr_str = ['김길순','홍길동','강감찬']
// // arr_str.sort()
// // console.log(arr_str)
// // arr_str.reverse()
// // console.log(arr_str)

// console.log(arr_str)

// arr_str.sort(function(a,b){
//     if (a>b) return -1
//     if (a<b) return 1
//     if (a==b) return 0
// })


const userDataList = [
    {id :2, name:'곰'},
    {id :10, name:'여우'},
    {id :4, name:'사자'},
    {id :29, name:'기린'},
    {id :101, name:'호랑이'},
]

const upper = document.querySelector('.asc')
const down = document.querySelector('.desc')
const result = document.querySelector('.result')

//데이터 표시
function updateList(){
    let ul_html = ``
    
    for (const data of userDataList){
    ul_html += `<li>${data.id}:${data.name}</li>`
    }
    result.innerHTML = ul_html
}

function sortByAsc() {
    alert('오름차순 버튼')
    userDataList.sort((a,b)=> a.id - b.id)
    updateList()
}


function sortByDesc() {
    alert('내림차순 버튼')
    userDataList.sort((a,b)=> b.id - a.id)
    updateList()
}

upper.addEventListener('click', ()=>{
    sortByAsc()
})

down.addEventListener('click', ()=>{
    sortByDesc()
})



const sort_test = [10,9,20,1]
sort_test.sort()
console.log("-- sort(), reverse() : 유니코드 기준으로 정렬",sort_test)