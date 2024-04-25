var userName = prompt("방문자의 이름?","")

console.log("방문자의 이름은:",userName)

if (userName){
    document.write(`방문자의 이름은&nbsp:&nbsp;${userName}&nbsp입니다. <br><br>방문을 환영합니다.`)
} else {
    document.write("방문자 이름을 입력해주세요!!!")
}



