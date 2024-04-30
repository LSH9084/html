var pare = document.querySelector('.parent')
var addbtn = document.querySelector('.add')
var delbtn = document.querySelector('.delbtn')

   
addbtn.addEventListener('click',()=>{
    console.log(addbtn)
    const input1 = document.querySelector('#input1')
    var inputva = input1.value
    // console.log(inputva)
    if( inputva == "" || !inputva){
        alert('추가할 내용이 없습니다.')
    } else {
        const hml = document.createElement('div')
        hml.innerHTML = `<p>${inputva}<button>X</button><button>Edit</button></p>`
        pare.appendChild(hml)
        input1.value = ""
        return false;
    }
    
    
})


function delfun(){
    var div = document.querySelectorAll('.parent > div')
    // console.log(div)
    var div2 = [...div]
    div2.forEach((e)=>{
            e.children[0].children[0].addEventListener('click',()=>{
                e.remove()
            })
})}

function editfun(){
    var div = document.querySelectorAll('.parent > div')
    var div2 = [...div]
    
    div2.forEach((e)=>{
        e.children[0].children[1].addEventListener('click',()=>{
            repla(e)
        })
})}


function repla(e){
    var isOk = prompt('수정할 내용을 입력해주세요','')
    var ehml
    if(isOk){
        ehml = document.createElement('div')
        ehml.innerHTML = `<p>${isOk}<button>X</button><button>Edit</button></p>`
        e.replaceWith(ehml)
        delfun()
    }
}
// editfun()
delfun()

var div = document.querySelectorAll('.parent > div')
    // console.log(div)
    var div2 = [...div]
    console.log(div2)

