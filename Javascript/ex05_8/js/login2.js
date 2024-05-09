const next_btn = document.querySelector('.next_btn')
const email_inp = document.querySelector('.email_inp')
const ps_inp = document.querySelector('.ps_inp')
const id = document.querySelector('.id')
const ps = document.querySelector('.ps')

    const save = localStorage.getItem('myId')
email_inp.value = save





next_btn.addEventListener('click',()=>{
    var email = email_inp.value
    if(emailCheck(email)){
        if(id.checked == true&&ps.checked != true){
            localStorage.setItem('myId',email_inp.value)
        }
        if(ps.checked == true&&id.checked != true){
            localStorage.setItem('myPs',ps_inp.value)
        }
        if(id.checked == true && ps.checked == true){
            localStorage.setItem('myId',email_inp.value)
            localStorage.setItem('myPs',ps_inp.value)
        }
    } else {
        alert('유효하지 않은 이메일 주소입니다.')
    }
    
})

function emailCheck(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	}else{
		return true;
	}
}