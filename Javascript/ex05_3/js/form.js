const myfiles = document.querySelector('#myfiles')
const myfiles2 = document.querySelector('#myfiles2')
const log = document.querySelector('.log')
const log2 = document.querySelector('.log2')
const img =document.querySelector('.img')


myfiles.addEventListener('change',(e)=>{
   let files = e.target.files
   for(i=0; i<files.length; i++){
    log.innerHTML=files[i].name
   }
})

myfiles2.addEventListener('input',(e)=>{
    let files1 = e.target.files[0]
    console.log(files1)
    const reader = new FileReader()

    reader.addEventListener('load',()=>{
        img.src = reader.result;
    })
    reader.readAsDataURL(files1)
})

// myfiles2.addEventListener('input',(e)=>{
//     let files = e.target.files
//     const files1 = [...files]
//     files1.forEach((v)=>{
//         console.log(v)
//         log2.innerHTML = v.name
//     })
    
// })