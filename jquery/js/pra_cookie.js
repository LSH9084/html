const inp = document.querySelector('.inp')
const add_btn = document.querySelector('.add_btn')
const result = document.querySelector('.result')
var close_btn = document.querySelectorAll('.close_btn')
// const close_btn1 = document.querySelector('.close_btn1')
const div_all = document.querySelectorAll('.result div')
const remove_all = document.querySelector('.remove_all')
remove_all.addEventListener('click',()=>{
    allDelCookies()
})

add_btn.addEventListener('click',()=>{
    addFun()
    const idx = document.querySelectorAll('.result div')
    var count = 0
    idx.forEach(()=>{
        count++
    })
    var a = count
    var b = inp.value
    set_cookie(a,b)
    inp.value = ''
})
function set_cookie(a,b){
    document.cookie = `${a} = "${b}"`
}
function addFun(){
    const hml = document.createElement('div')
    hml.innerHTML = `<li>${inp.value}</li><span class="close_btn">X</span>`
    result.appendChild(hml)
    closeFun()
}
function closeFun(){
    var close_btn = document.querySelectorAll('.close_btn')
    var real_idx
    close_btn.forEach((v)=>{
        v.addEventListener('click',(e)=>{
            real_idx = $(e.target.parentNode).index()
            e.target.parentNode.remove() 
            remove_cookie(real_idx)
        })
    })
}

function remove_cookie(real_idx){
    document.cookie = real_idx+1+'=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
}

const allDelCookies = (domain, path) => {
    // const doc = document;
    domain = domain || document.domain;
    path = path || '/';
    const cookies = document.cookie.split('; '); // 배열로 반환
    console.log(cookies);
    const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';
    // 반목문 순회하면서 쿠키 전체 삭제
    if (!document.cookie) {
      alert('삭제할 쿠키가 없습니다.');
    } else {
      for (i = 0; i < cookies.length; i++) {
        // const uname = cookies[i].split('=')[0];
        // document.cookie = `${uname}=; expires=${expiration}`;
        document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration;
        // document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration + '; domain =' + domain;
      }
      alert('쿠키 전부 삭제완료!!');
    }
  }

window.addEventListener('load',()=>{
    const load_cookie = get_cookie()
    // console.log(load_cookie[1])
    const cookiess = document.cookie.split(';')
    // console.log(cookiess)
    for(let i=1; i<cookiess.length+1; i++){
        // console.log(i)
        const hml = document.createElement('div')
        hml.innerHTML = `<li>${load_cookie[i]}</li><span class="close_btn">X</span>`
        result.appendChild(hml)
    }
    closeFun()
})
get_cookie()
function get_cookie(){
    const cookies = document.cookie
    // console.log(cookies)
    const data = cookies.split(';')
    const json_data = {}
    data.forEach((v)=>{
        v.split('=')
        // console.log(v.split('=')[0])
        const key = v.split('=')[0].trim()
        // console.log(key)
        const value = v.split('=')[1].substring(1,v.split('=')[1].length-1)
        // console.log(value)
        json_data[key]=value
    })
    // console.log(json_data)
    return(json_data)
}

