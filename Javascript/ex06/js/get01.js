/*
문서 객체를 선택
1개 선택
 document.getElementById(아이디)
 document.getSelector(객체 선택자) 아이디만 찾을수 있음
여러 개 선택
 document.getElementByClassName(클래스 이름)
 document.getElementByName(태그 이름)
 document.getElementByAll(객체 선택자(모두포함))
*/
// var header = document.getElementById('header')
// header.innerHTML = '태그 선택자입니다.'
// header.style.color = 'orange'
// header.style.border = '5px solid black'
// header.style.fontSize = '50px'
// header.style.backgroundColor = 'darkGray'

// var header2 = document.querySelector("#header");
// 태그요소 선택시 여러개일 경우는 배열구조형식으로 전환 됨.
var header2 = document.querySelectorAll("h1") // 집합(배열구조)

for (i=0; i<header2.length; i++){
    header2[i].style.color = 'red'
    header2[i].style.backgroundColor = 'darkGray'
}



// header2.style.color = "red";
// header2.style.backgroundColor = 'green'
