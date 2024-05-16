const board = document.querySelector('.board')


for (let x = 1; x<17; x++){
    for(let y =1; y<9; y++ ){
        board.innerHTML += `<div class="box box${y}-${x}"></div>`
    }
}
const box = document.querySelectorAll('.box')
// box.forEach((v)=>{
//     v.addEventListener('mouseover',(e)=>{
//         e.target.style.backgroundColor = 'blue'
//     })
//     v.addEventListener('mouseout',(e)=>{
//         e.target.style.backgroundColor = '#a19f9f'
//     })
// })
const start = document.querySelector('.start')

start.addEventListener('click',(e)=>{
    const random_num = Math.floor(Math.random()*1+1)
    console.log(random_num)
    if(random_num == 1){
        document.querySelector(`.box4-1`).style.backgroundColor = 'red'
        document.querySelector(`.box4-2`).style.backgroundColor = 'red'
        document.querySelector(`.box4-3`).style.backgroundColor = 'red'
        document.querySelector(`.box4-4`).style.backgroundColor = 'red'
        Ifun()
    }

    if(random_num == 2){
        document.querySelector(`.box4-1`).style.backgroundColor = 'red'
        document.querySelector(`.box4-2`).style.backgroundColor = 'red'
        document.querySelector(`.box4-3`).style.backgroundColor = 'red'
        document.querySelector(`.box5-3`).style.backgroundColor = 'red'
        Lfun()   
    }

    if(random_num == 3){
        for(i=1;i<4;i++){
            document.querySelector(`.box${i+3}-2`).style.backgroundColor = 'red'
            document.querySelector(`.box5-1`).style.backgroundColor = 'red'
        }
    }

    if(random_num == 4){
        for(i=1; i<3; i++){
            document.querySelector(`.box${i+2}-1`).style.backgroundColor = 'red'
            document.querySelector(`.box${i+3}-2`).style.backgroundColor = 'red'
        }
    }
})

function Ifun(){
    for(i=2; i<14; i++){
        (function(x){
            setTimeout(function(){
                document.querySelector(`.box4-${x-1}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box4-${x}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box4-${x+1}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box4-${x+2}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box4-${x}`).style.backgroundColor = 'red'
                document.querySelector(`.box4-${x+1}`).style.backgroundColor = 'red'
                document.querySelector(`.box4-${x+2}`).style.backgroundColor = 'red'
                document.querySelector(`.box4-${x+3}`).style.backgroundColor = 'red'
                
                if(x==13||document.querySelector(`.box4-${x+4}`).id =='stacked'){
                    stackI(x)
                }
            },100*x)
        })(i)
    }
}

function Lfun(){
    for(i=2; i<15; i++){
        (function(x){
            setTimeout(function(){
                document.querySelector(`.box4-${x-1}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box4-${x}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box4-${x+1}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box5-${x+1}`).style.backgroundColor = '#a19f9f'
                document.querySelector(`.box4-${x}`).style.backgroundColor = 'red'
                document.querySelector(`.box4-${x+1}`).style.backgroundColor = 'red'
                document.querySelector(`.box4-${x+2}`).style.backgroundColor = 'red'
                document.querySelector(`.box5-${x+2}`).style.backgroundColor = 'red'
                stackL(x)
            },100*x)
        })(i)
    }
}

function stackI(x){

        document.querySelector(`.box4-${x}`).style.backgroundColor = 'blue'
        document.querySelector(`.box4-${x+1}`).style.backgroundColor = 'blue'
        document.querySelector(`.box4-${x+2}`).style.backgroundColor = 'blue'
        document.querySelector(`.box4-${x+3}`).style.backgroundColor = 'blue'
        document.querySelector(`.box4-${x}`).id='stacked'
        console.log(document.querySelector(`.box4-${x}`).id)

}

function stackL(x){
    if(x==14){
        document.querySelector(`.box4-${x}`).style.backgroundColor = 'blue'
        document.querySelector(`.box4-${x+1}`).style.backgroundColor = 'blue'
        document.querySelector(`.box4-${x+2}`).style.backgroundColor = 'blue'
        document.querySelector(`.box5-${x+2}`).style.backgroundColor = 'blue'
    }
}










