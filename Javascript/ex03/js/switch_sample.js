/*

let site = prompt("네이버, 다음, 네이트, 구글 중 \
즐겨 사용하는 포털 검색 사이트는?","")
let url = ""

switch(site){
    case "구글":
        url = "www.google.com"
        break
    case "다음":
        url = "www.daum.net"
        break
    case "네이버":
        url = "www.naver.com"
        break
    case "네이트":
        url = "www.nate.com"
        break
    default:
        alert("보기 중에 없는 사이트입니다.")
}

var win=window.open("about:blank")

if (url) {
    win.location.href = "http://"+url
    win.location.target = _blank
==window.open("about:blank").location.href = "http://"+url
}

*/


/*
내장 함수(이미 만들어 논 함수)
1. Math 함수 :*10을 하면 0보다는 크고 10보다는\
 작은 숫자를 무작위로
*/

// console.log(Math.floor(Math.random()*10))
// 0이상 10미만의 랜덤한 숫자를 뽑는 함수
// console.log(Math.floor(Math.random()*3))
// 0이상 3미만의 랜덤한 숫자를 뽑는 함수
//(Math.floor(Math.random()*n)) 
//0부터 n미만의 숫자를 뽑는 랜덤 함수

// console.log(Math.floor(Math.random()*3+1))
//(Math.floor(Math.random()*n+m))==
//m부터 n+m미만의 숫자를 뽑는 랜덤 함수 0~9
var com =Math.ceil(Math.random()*3) // 1~10
console.log("컴퓨터:"+com)

document.write("<h1>컴퓨터 가위,바위,보<h/>")

var game = prompt("가위,바위,보 중 선택?","가위")

var gameNum
switch(game){
    case "가위" :
        gameNum=1
        break
    case "바위" :
        gameNum=2
        break
    case "보" :
        gameNum=3
        break
    default :
        alert("잘못 작성했습니다.")
}


if (com == gameNum)
document.write("<br>잘 맞췄습니다. 축하드립니다.")
else 
document.write("<br>틀림 ㅅㄱ")



