const save_id = document.querySelector('.id')
const save_ps = document.querySelector('.ps')
const auto_login1 = document.querySelector('.auto_login1')
const email_inp = document.querySelector('.email_inp')
const ps_inp = document.querySelector('.ps_inp')
const next_btn = document.querySelector('.next_btn')

next_btn.addEventListener('click',()=>{
    var email = email_inp.value
    const ppp = get_cookie()
    if(auto_login1.checked == true){
        var a = 'checked'
        var b = auto_login1
        set_cookie(a,b)
    }
    if(email==ppp.realId&&ps_inp.value == ppp.realPs ){
        alert('로그인되었습니다.')
    } else if(email != ppp.realId || ps_inp.value != ppp.realPs){
        alert('이메일 또는 비밀번호가 틀렸습니다.')
    }

    if(emailCheck(email)){
        if(save_id.checked == true && save_ps.checked != true){
            var a = 'emailId'
            var b = email_inp
            set_cookie(a,b)
        }
        if(save_id.checked != true && save_ps.checked == true){
            var a = 'psId'
            var b = ps_inp
            set_cookie(a,b)
        }
        if(save_id.checked == true && save_ps.checked == true){
            var a = 'emailId'
            var b = email_inp
            set_cookie(a,b)
            var a = 'psId'
            var b = ps_inp
            set_cookie(a,b)
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

function set_cookie(a,b){
    return document.cookie = `${a} = "${b.value}";Max-Age=3000`
}
get_cookie()
function get_cookie(){
    const cookies = document.cookie
    console.log(cookies)
    const cookies2 = cookies.split(';')
    // console.log(cookies2)
    const json_data = {}
    cookies2.forEach((v)=>{
        const h = v.split('=')
        // console.log(h[0])
        console.log(h[0].trim())
        const key = h[0].trim()
        console.log(h[1].substring(1,h[1].length-1))
        const value = h[1].substring(1,h[1].length-1)
        json_data[key]=value
    })
    console.log(json_data)
    return(json_data)
}

email_inp.addEventListener('focus',(e)=>{
    const cookie_value = get_cookie()
    email_inp.value = cookie_value.emailId
})

ps_inp.addEventListener('focus',()=>{
    const cookie_value = get_cookie()
    ps_inp.value = cookie_value.psId
})

window.addEventListener('load',()=>{
    const cookie_value = get_cookie()
    if(cookie_value.checked == 'on'){
        auto_login1.checked = true
        if(cookie_value.emailId==cookie_value.realId && cookie_value.psId==cookie_value.realPs){
            alert('로그인 되었습니다.2')
        } else {
            alert('이메일 또는 비밀번호가 틀렸습니다.2')
        }
    }
})

auto_login1.addEventListener('change',()=>{
    if(auto_login1.checked == false){
        var a = 'checked'
        deleteCookie(a)
    }
})

function deleteCookie(a){
    document.cookie = `${a}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`
}