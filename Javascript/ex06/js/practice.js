
var RN = Math.floor(Math.random()*100)
var count = 0

console.log(RN)


PNum = document.querySelector('#try').value;


function finding(){
    var PNum = document.querySelector('#try').value;
    if (1<=PNum && PNum<=100){
    if(RN>PNum){
        document.querySelector('#displ').innerHTML = 'UP!!'
    }
    else if (RN<PNum){
        document.querySelector('#displ').innerHTML = 'DOWN!!'
    }
    else  {
        document.querySelector('#displ').innerHTML = 'CHECKMATE!!'
    }    
    count++;
    document.querySelector('#num3').innerHTML = "시도횟수 :"+count + "회" ;
  }
else {
    alert("1과 100 사이의 숫자를 입력해주세요")
}
}