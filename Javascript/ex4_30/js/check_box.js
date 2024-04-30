const chA = document.querySelector('#chA')
const chB = document.querySelector('#chB')
const chC = document.querySelector('#chC')
// console.log(chA,chB,chC)

const chS = document.querySelectorAll('input')
const chS1 = [...chS]
// chS1.forEach((e)=>{
//         if(e.checked != true){
//             const chekPrompt = prompt('작동하시겠습니까?[네/아니오]',"")
//             if(chekPrompt == '네'){
//             e.checked = true
//             alert('작동중')
//         } if(chekPrompt == '아니오'){
//             alert('작동안함')
//         }      
//     }  
// })
const result = document.querySelector('.result')
chS1.forEach((e)=>{
    e.addEventListener('change',(i)=>{
        if(i.target.checked == true){
            // const hml = document.createElement('li')
            // hml.innerHTML = e.value
            // result.after(hml)
            hmll = e.value + `&nbsp;`
            result.innerHTML += hmll
        }
    })
})

const reset = document.querySelector('.reset')
reset.addEventListener('click',()=>{
    window.location.reload()
})