const allChk = document.querySelector('#allChk')
const chk_items = document.querySelectorAll('.chk')
const chk_items_len = chk_items.length
const next = document.querySelector('#next')
const chk1_box = document.querySelectorAll('#box1 .chk')
const chk1_box_len = chk1_box.length
const chk2_box = document.querySelectorAll('#box2 .chk')


chk1_box.forEach((e)=>{
    e.addEventListener('change',(e)=>{
        chkCntFun()
        chk2CntFun()
    })
})

function chkCntFun(){
    let count = 0
    chk1_box.forEach((e)=>{
        if(e.checked == true){
            count++
        }
    })
    console.log(count)
    if (count >= chk1_box_len){
        next.removeAttribute('disabled')
    } else {
        next.setAttribute('disabled',true)
    }
}

chk2_box.forEach((e)=>{
    e.addEventListener('change',(e)=>{
        chk2CntFun()
    })
})
function chk2CntFun(){
    let count = 0
    chk1_box.forEach((e)=>{
        if(e.checked == true){
            count++
        }
    })
    chk2_box.forEach((e)=>{
        if(e.checked == true){
            count++
        }
    })
    console.log(count)
    if(count >= chk_items_len){
        next.removeAttribute('disabled')
        allChk.checked = true
    } else allChk.checked = false
}


allChk.addEventListener('change',(i)=>{
    allFun(i.target.checked)
})

function allFun(isReal){
    chk_items.forEach((e)=>{
        if(isReal == true){
            e.checked =true
        } else {
            e.checked = false
        }
        if(isReal == true){
            next.removeAttribute('disabled')
        } else next.setAttribute('disabled',true)
    })
}

