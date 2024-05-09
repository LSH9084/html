const next_btn = document.querySelector('.next_btn')
const email_inp = document.querySelector('.email_inp')
const ps_inp = document.querySelector('.ps_inp')
const id = document.querySelector('.id')
const ps = document.querySelector('.ps')
const email_inpV = email_inp.value
const auto_login1 = document.querySelector('.auto_login1')

auto_login1.addEventListener('change',(e)=>{
    if(e.target.checked == false){
        deleteCookie()
    }
})

function deleteCookie(){
    document.cookie = 'checked' + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

window.addEventListener('load',()=>{
    const ppp = auto_login()
    console.log(ppp.checked)
    if(ppp.checked == 'true'){
        auto_login1.checked = true
        if(ppp.emailId==ppp.realId&&ppp.psId==ppp.realPs){
            alert('로그인 되었습니다.2')
        } else {
            alert('이메일 또는 비밀번호가 틀렸습니다.2')
        }
    }
})

function auto_login(){
    const cookies = document.cookie
    const cookieItems = cookies.split(';')
    const json_data = {}
    cookieItems.forEach((v)=>{
        const e_id = v.split('=')[1]
        const e_id1 = e_id.substring(1,e_id.length-1)
        const e_ps = v.split('=')[0]
        const e_ps1 = e_ps.trim()
        const key = e_ps1
        const value = e_id1
        json_data[key]=value   
    })
    return(json_data)
}

function set_cookie(email){
    document.cookie = `emailId = "${email}";Max-Age=30`
}
function set_cookie2(pss){
    document.cookie = `psId = "${pss}";Max-Age=30`
}
function set_cookie3(auto_check){
    document.cookie = `checked = "${auto_check}";Max-Age=30`
}
function get_cookie() {
    const cookies = document.cookie
    const cookieItems = cookies.split(';')
    const json_data = {}
    cookieItems.forEach((v)=>{
        const e_id = v.split('=')[1]
        const e_id1 = e_id.substring(1,e_id.length-1)
        const e_ps = v.split('=')[0]
        const e_ps1 = e_ps.trim()
        const key = e_ps1
        const value = e_id1
        json_data[key]=value       
    })
    return(json_data)
}

email_inp.addEventListener('focus',()=>{
    const vvalue = get_cookie()
    if(vvalue.emailId != null){
    email_inp.value = vvalue.emailId}
})

ps_inp.addEventListener('focus',()=>{
    const ggalue = get_cookie()
    if(ggalue.psId != null){
    ps_inp.value = ggalue.psId}
})

next_btn.addEventListener('click',()=>{
    const ppp = auto_login()
    var email = email_inp.value
    var pss = ps_inp.value
    var auto_check = auto_login1.checked
    if(auto_login1.checked == true){
        set_cookie3(auto_check)
    }
    if(email==ppp.realId&&pss==ppp.realPs){
        alert('로그인되었습니다')
    } else if(email != ppp.realId || pss != ppp.realPs) {
        alert('이메일 또는 비밀번호가 틀렸습니다.')
    }
    if(emailCheck(email)){
        if(id.checked == true&&ps.checked != true){
            set_cookie(email)
        }
        if(ps.checked == true&&id.checked != true){
            set_cookie2(pss)
        }
        if(id.checked == true && ps.checked == true){
            set_cookie(email)
            set_cookie2(pss)
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

