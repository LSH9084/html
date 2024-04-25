// 문자열 길이
console.log("홍길동은 부산에 있습니다.".length)
console.log(" 홍길동은 부산에 있습니다.".length)

//textarea영역
let textarea = document.querySelector('#textarea')

let str_len = document.querySelector('.str_len')

//이벤트 핸들러 구성
//텍스트를 입력할 때 마다 함수를 수행: onKeyUp()
textarea.addEventListener('keyup', onKeyUp) //'이벤트 종료', '수행할 함수'

function onKeyUp() {
    // 입력된 글자 읽어오기
    // const inputText = textarea.value
    // str_len.innerText = inputText.length
    str_len.innerText = textarea.value.length
    str_len.style.color = 'red'
}   ////복습하기!@!@@!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 공백 자르기
console.log('trim()','hello'.length, ' he llo '.trim().length)
             //J가첫번째  Ja의 a가 두번째
const str1 = "Javascript good!!"
console.log(str1.indexOf('Javascript')) //첫번째 위치 : index 0번 양수번호는 있다는 뜻
console.log(str1.indexOf('python'))  // index 음수 번호는 없다는 뜻
if (str1.indexOf('python')<0) {
    console.log('python문자열을 포함하고 있지 않습니다.')
} else {
    console.log('찾고자하는 문자열을 포함하고 있습니다.') 
}
console.log(str1.indexOf('a',3)) //특정 인덱스 번호(예시로 든게 3번) 부터 탐색한다.

//정규식 표현
console.log(str1.search(/script/))
console.log(str1.search(/HTML/)) // 검색 실패

console.log(str1.includes('Javascri')) //검색 성공 여부 : true/false boolean
console.log(str1.includes('Javascrit'))
console.log(str1.startsWith('Ja'))
console.log(str1.startsWith('good!!')) //"뒤의 제일 첫자만 해당됨
console.log(str1.endsWith('!!'))

// 특정 위치에 있는 문자열 추출
console.log('javascript.'.charAt(10))


//검색어
const searchWordText = document.querySelector('#search-word-input')
//지역 리스트
const prefectureList = document.querySelector('#prefecture-list')

//문자가 입력될 때마다 데이터 체크 작업
searchWordText.addEventListener('keyup',()=>{
    //입력한 검색어 
    const searchWord = searchWordText.value

    // 
    prefectureList.forEach(() => {
    //     if(!searchWord || searchWord=''){
        
    //   }
    });
    console.log(searchWord)
})

// forEach()
const data = [10,20,30]
for (i=0; i<data.length; i++) {
    console.log(data[i])
}
console.log("forEach()")
data.forEach((item)=> {
    console.log(item)
})