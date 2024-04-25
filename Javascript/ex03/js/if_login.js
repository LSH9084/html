let id = "kio11010"
let ps = "alcls154"

let user_id = prompt("아이디:","")
let user_ps = prompt("비밀번호:","")

if (id == user_id){
    if (ps == user_ps){
    document.write(`${user_id}님 반갑습니다.`)
} else {
    alert("비밀번호가 일치하지 않습니다.")
    location.reload() //f5번 키와 같은 기능
} 
}else {
    alert("아이디가 일치하지 않습니다.")
    location.reload();
}
    
    



