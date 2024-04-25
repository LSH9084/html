//배열.find(콜벡함수) 콜백 함수 / 콜백함수 조건에 맞는 첫번째 요소만 찾고 검색 중단
//배열.findIndex(테스트함수) / 콜백함수 조건에 맞는 첫번째 요소의 index번호만 찾고 검색 중단

// const myArray = ['홍길동','홍길순','이순신','길순이','이순신','강감찬']
// const targetUser = myArray.find((data)=> data == '이순신')
// console.log(targetUser)

// const myArray1 = ['홍길동','홍길순','이순신','길순이','이순신','강감찬']
// const targetUser1 = myArray.findIndex((data)=> data == '강감찬')
// console.log(targetUser1)

//유저 정보 배열에서 가져온 데이터를 표시

const userDataList = [
        {id:123, name:'곰'} ,
        {id:1021, name:'사자'} ,
        {id:6021, name:'여우'}
]

const userID = document.querySelector('#search-id-input')
const searchResult = document.querySelector('#search-Result')

// 유저 검색 함수 정의
//문자가 입력 될 때마다 내용 체크하는 
userID.addEventListener('keyup',()=>{
    // 키보드로 입력한 숫자는 문자열로 되는데 계산하기 위해 문자열을 -> 숫자 변환 : Number()넘버함수
    const searchId = Number(event.target.value)
    console.log('키워드:',searchId)
    findUser(searchId)
})


function findUser(searchId){
    const targetData = userDataList.find((data)=> data.id == searchId)

    if(targetData == null){ // null : 해당 데이터가 없으면 
        searchResult.innerHTML = '유저 검색 결과 없음'
        return
    }
    
    searchResult.innerHTML = targetData.name;
   
}








