const inp_val = document.querySelectorAll('.container button')
const re1 = document.querySelector('.re1')
const re2 = document.querySelector('.re2')
inp_val.forEach((v)=>{
    v.addEventListener('click',inpFun)
})
function inpFun(v){
    if(v.target.innerText == '='){
        calFun()
    } else {
        re1.value += v.target.innerText
    }
    if(v.target.innerText == 'C'){
        re1.value = ''
        re2.value = ''
    }
}

function calFun(){
    let re1Val = re1.value
    let b = ['+','-','*','/']
    let count = 0
    let v2
    b.forEach((v)=>{
        if(re1Val.includes(v)==true){
            console.log(re1Val.includes(v))
            count++
            calcalFun(v,count)
        }
    }) 
}
function calcalFun(v,count){
    let re1Val = re1.value
    var re1Val_sp = re1Val.split(v)
    let re1Val2 = re1Val_sp[0].split('+')
    let re1V = [re1Val2[0],re1Val2[1],re1Val[re1Val.length-1]]
    console.log(re1V)
    console.log(count)
    if(count == 1){
        if(v=='+'){
            re2.value = re1Val_sp.map((t)=>Number(t)).reduce((a,b)=>a+b)
        }
        
        if(v=='-'){
            re2.value = re1Val_sp.map((t)=>Number(t)).reduce((a,b)=>a-b)
        }
        
        if(v=='*'){
            re2.value = re1Val_sp.map((t)=>Number(t)).reduce((a,b)=>a*b)
        }
        
        if(v=='/'){
            re2.value = re1Val_sp.map((t)=>Number(t)).reduce((a,b)=>a/b)
        }
    }
    if(count == 2){
        console.log(re1V)
            let re1V_sp = re1V.map((t)=>Number(t))
            re2.value = re1V_sp[0]+re1V_sp[1]-re1V_sp[2]   
    } 
}

