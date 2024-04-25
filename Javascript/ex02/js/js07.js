/*
체중 상태 알아보기
철수의 신장: 180
철수의 체중: 74
적정 체중 = (본인 신장 - 100)*0.9
결과 판별 : 적정체중 초과시 비정상 반대는 정상
*/
//적정체중은 72

// let h = 180
// let w = 72
// let gW = (h-100)*0.9

// console.log("철수의 적정 체중 =",gW)

// console.log(w>=gW ? "철수의 체중은 비정상" : "철수의 체중은 정상")
// console.log(w>=gW ? (w-gW)+"초과": "정상")



let uH , uW , uname ;
uname = prompt("이름:","")
uW = prompt("체중:","")
uH = prompt("신장:","")



let avgW = (uH-100)*0.9
document.write(`<h2>당신의 이름은 ${uname}</h2>`)
document.write("<h2>"+uname+"</h2>")
document.write(`<p>철수의 적정 체중= ${avgW}kg</p>`)
document.write(`<p>신장:${uH}cm</p>`)
document.write(`<p>체중:${uW}kg</p>`)




