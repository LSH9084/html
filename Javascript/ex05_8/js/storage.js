const log = document.querySelector('#log')
const inp = document.querySelector('.inp')
const inp2 = document.querySelector('.inp2')
const btn_div = document.querySelectorAll('.btn_div .btn')
const btn_div2 = document.querySelectorAll('.btn_div2 .btn')
const btn_div3 = document.querySelectorAll('.btn_div3 .btn')

btn_div3.forEach((v)=>{
    v.addEventListener('click',(e)=>{
        if(e.target.id == 'save2'){
            
            document.cookie = 'id=1'
            document.cookie = 'age=10'
            document.cookie = `name=홍길동`
            document.cookie = `name2=${encodeURIComponent('홍길동')}`
        } else {
            const cookies = document.cookie
            const jsonData = convertCookieToObject(cookies)
            // console.log("log:",jsonData)
            // console.info("info:",jsonData)
            // console.error("error:",jsonData)
            // console.warn("warn:",jsonData)
            // console.log('===.dir()을 썻을때')
            // console.dir(jsonData)
            // console.log("===.table()로 썻을떄")
            // console.table(jsonData)
            // console.dir(document.body)
            log.innerText = 
                            // JSON.stringify(jsonData)
                            JSON.stringify(jsonData,null,'  ')
        }
    })
})

function convertCookieToObject(cookies){
    const cookieItems = cookies.split(';')
    console.log(cookieItems)
    const json_data = {}
    cookieItems.forEach((v)=>{
        const elem = v.split('=')
        const key = elem[0]
        const value = decodeURIComponent(elem[1])
        console.log("--key, value전환")
        console.log(key,value)
        json_data[key] = value
    })
    return(json_data)
}

btn_div2.forEach((v)=>{
    v.addEventListener('click',(e)=>{
        if(e.target.id == 'remove'){
            localStorage.removeItem('myKey')
            inp.value = ''
        } else {
            localStorage.clear()
        }
    })
})



btn_div.forEach((v)=>{
    v.addEventListener('click',(e)=>{
        if(e.target.id=='save'){
            localStorage.setItem('myKey',inp.value)
            localStorage.setItem('이름',inp.value)
            inp.value = ''
        } else {
            const newData = localStorage.getItem('myKey')
            inp.value = newData
        }
    })
})


