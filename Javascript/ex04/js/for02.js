/*
다중 for문
ex )구구단
단을 입력하면 단에 대한 곱을 출력
*/
/*
for (let i=2; i<=9; i++){
    document.write(`<h1>---${i}단---</h1>`)
    document.write("<hr>")
    for (let j=1; j<=9; j++){
        document.write(`${i}*${j}=${i*j}<br>`)
        
    }
}
*/

/*
for (let i=1; i<=3; i++){
    for(let j=1; j<=3; j++) { //주의  for문의 변수를 같은 것을 쓰면 안됨
        console.log(i,j)

    }  //inner for block
} //outer for block
*/

// let dan = prompt("단 입력: ","2")

// for (let i=1; i<=19; i++){
//         document.write(`${dan}*${i}=${dan*i}<br>`)
// }

// for (let i=1; i<=5; i++){
//     document.write(`${i} <hr>`)
//     for(let j=1; j<=5; j++){
//         document.write(j)
//     }
// }


let table_str = "<table border=1 width=200>"  ///중요

let count = 0


for(let i=1; i<=5; i++){
    table_str += "<tr>"
    for(let j=1; j<=5; j++){
        // table_str += "<td>"
        // table_str += ++count
        // table_str += "</td>"
        table_str += `<td>${++count}</td>`
    }
    table_str += "</tr>"
}
table_str += "</table>"

document.write(table_str)
console.log(table_str)
