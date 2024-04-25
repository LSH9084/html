var start = document.querySelector('.start')
var cel = document.querySelector('.cel')
var fah = document.querySelector('.fah')


cel.addEventListener('keyup',()=>{
    let celv = cel.value
    
    console.log(celv)
    start.addEventListener('click',()=>{
        
        fah.value = `${celv*1.8+32}`
    
    })
})

fah.addEventListener('keyup',()=>{
    let fahv = fah.value
    console.log(fahv)
    start.addEventListener('click',()=>{
        
        cel.value = `${(fahv-32)/1.8}`
    
    })
})










