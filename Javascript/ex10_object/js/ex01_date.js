var date = new Date()
var year = date.getFullYear() // 연도 정보 , .getXXXX() : 추출
var month = date.getMonth()+1
var today = date.getDate()
var hour = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var milli = date.getMilliseconds()
var day = date.getDay()

document.querySelector('.log').innerHTML = `지금은 ${year}년 ${month+1}월 ${today}일 ${hour}시 ${minutes}분 ${seconds}:${milli}초 입니다.`

console.log(date)
console.log(year)
console.log(month+1)
console.log(today)

let ampm //오전 오후 구분
let hour2
if(hour < 12){
    ampm = '오전'
    hour2 = hour
} else {
    ampm = '오후'
    hour2 = hour - 12
} 

const dayy = ['일','월','화','수','목','금','토',]

document.querySelector('.log').innerHTML = `지금은 ${year}년 ${month+1}월 ${today}일 ${dayy[day]}요일 ${ampm} ${hour2}시 ${minutes}분 ${seconds}:${milli}초 입니다.`

var DD = new Date(2024,4,1)
DD.setFullYear(2000)
var year1 = DD.getFullYear() // 연도 정보 , .getXXXX() : 추출
var month1 = DD.getMonth()
var today1 = DD.getDate()
var hour1 = DD.getHours()
var minutes1 = DD.getMinutes()
var seconds1 = DD.getSeconds()
var milli1 = DD.getMilliseconds()
var day1 = DD.getDay()


document.querySelector('.log2').innerHTML = `지금은 ${year1}년 ${month1}월 ${today1}일 ${dayy[day1]}요일 ${ampm} ${hour2}시 ${minutes1}분 ${seconds1}:${milli1}초 입니다.`

var date_calc = document.querySelector('.date_calc')

//남은 날짜 계산하기
var today = new Date()
var nowYear = date.getFullYear()
var theDate = new Date(nowYear,11,25)
var diffDate = theDate.getTime() - today.getTime()
//gettime(): 1970.01.01로부터 경과한 시간을 밀리초로 표시
console.log(diffDate+'밀리초')
var k = Math.floor (diffDate/(60*1000*60*24))

console.log(k)

date_calc.innerHTML = `크리스마스는 ${k}일 남았습니다.`

var localdate = new Date()
var local = date.toLocaleString()
var localdate = date.toLocaleDateString()
var localetime = date.toLocaleTimeString()

console.log(local)
console.log(localdate)
console.log(localetime)
document.querySelector('.log3').innerHTML = local

// 날짜 문자열의 타임스탬프(날짜를 밀리초로 계산하여 표시)
var num1 = Date.parse('2024/4/2')
console.log('2024/4/2:',num1,new Date().getTime())

// 경과 시간 확인하기

const oldTime = Date.now()
console.log(oldTime) //현재 날짜를 기준으로 타임스탬프 표시

//setInterval(수행할 함수, 밀리초)
setInterval(()=>{
    const currentTime = Date.now()
    //경과한 밀리초
    const diff = currentTime - oldTime
    //초로 환산
    const sec = Math.floor(diff/1000)
    document.querySelector('.time').innerHTML = `${sec}초`
})


// 카운트 다운

const totalTime = 10000 // 10 초
const oldTime2 = Date.now() //실행 시점의 밀리초시간
//타이머를 중지하기 위해 참조변수 사용
const timeId = setInterval(()=>{
    const currentTime2 = Date.now()
    const diff2 = currentTime2 - oldTime2
    
    const remainMSec = totalTime - diff2
    const sec2 = Math.floor(remainMSec/1000)
    let label = `남은 시간 ${sec2}초`
    // 0초 이하일 경우
    if (remainMSec <= 0){
        clearInterval(timeId)
        label = '종료'
    } else {
        document.querySelector('.count').innerHTML = `남은 시간은 ${sec2}`
    } 
    
})


