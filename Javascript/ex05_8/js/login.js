const next_btn = document.querySelector('.next_btn')
const email_inp = document.querySelector('.email_inp')
const ps_inp = document.querySelector('.ps_inp')
const id = document.querySelector('.id')
const ps = document.querySelector('.ps')
const email_inpV = email_inp.value
const realId = 'sanghun1101088@gmail.com'
const realPs = 'alcls154-*'
const auto_login1 = document.querySelector('.auto_login1')
window.addEventListener('load',()=>{
    const ppp = auto_login()
    console.log(ppp.checked)
    if(ppp.checked == 'true'){
        auto_login1.checked = true
    }
    if(ppp != null){
        if(auto_login1.checked == true){
            // const ppp = auto_login()
            console.log(realId)
            if(realId == email_inp.value && realPs == ps_inp.value){
                window.location.href = 'https://www.google.com'
            } else {
                alert('이메일 또는 비밀번호가 틀립니다.')
            }
        }
    }  
})


function auto_login(){
    const cookies = document.cookie
    const cookieItems = cookies.split(';')
    // console.log(cookieItems)
    const json_data = {}
    cookieItems.forEach((v)=>{
        const e_id = v.split('=')[1]
        const e_id1 = e_id.substring(1,e_id.length-1)
        const e_ps = v.split('=')[0]
        const e_ps1 = e_ps.trim()
        // console.log(e_ps1)
        // console.log(e_id)
        const key = e_ps1
        const value = e_id1
        json_data[key]=value
        
        // console.log(e_id1)        
    })
    // console.log("emailid:",json_data.emailId,"|||psId:",json_data.psId)
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
    // console.log(cookieItems)
    const json_data = {}
    cookieItems.forEach((v)=>{
        const e_id = v.split('=')[1]
        const e_id1 = e_id.substring(1,e_id.length-1)
        const e_ps = v.split('=')[0]
        const e_ps1 = e_ps.trim()
        // console.log(e_ps1)
        // console.log(e_id)
        const key = e_ps1
        const value = e_id1
        json_data[key]=value
        
        // console.log(e_id1)        
    })
    // console.log("emailid:",json_data.emailId,"|||psId:",json_data.psId)
    return(json_data)
}

// get_cookie()

email_inp.addEventListener('focus',()=>{
    const vvalue = get_cookie()
    if(vvalue.emailId != null){
    email_inp.value = vvalue.emailId}
})

ps_inp.addEventListener('focus',()=>{
    const ggalue = get_cookie()
    if(ggalue.psId != null){
    ps_inp.value = ggalue}
})

// next_btn.addEventListener('click',()=>{
//     if(auto_login1.checked == true){
//         set_cookie3(auto_check)
//     }
// })

next_btn.addEventListener('click',()=>{
    var email = email_inp.value
    var pss = ps_inp.value
    var auto_check = auto_login1.checked
    if(auto_login1.checked == true){
        set_cookie3(auto_check)
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

