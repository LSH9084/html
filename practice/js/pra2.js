var start = document.querySelector('.start')
var cel = document.querySelectorAll('.cel')
// console.log(cel[0])
cel.forEach((e,i)=>{
    // console.log(e,i)
    nFunc(e,i)
})

    
function nFunc(e,i){
    if(i==0){
        e.addEventListener('keyup',()=>{
            let celv = e.value
            start.addEventListener('click',()=>{
                cel[1].value = `${celv*1.8+32}`
            })
        })
    } else if (i==1){
        e.addEventListener('keyup',()=>{
            let celv = e.value
            start.addEventListener('click',()=>{
                cel[0].value = `${(celv-32)/1.8}`
            })
        })
    }
}
            
        
    
