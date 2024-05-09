// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((resp) => resp.json())
//     .then((data) => console.log(JSON.stringify(data,null,' ')))

const getJsonData = async ()=>{
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await resp.json()
        const data2 = JSON.stringify(data,null,'  ')
        // console.log(data2)
        data.forEach(v=>{
        console.log(v.name)
        console.log("-------")
        for(let key in v){
            // console.log(`${key}=>${v[key]}`)
            if(typeof v[key]==='object'){
                let key2 = v[key]
                for(let k in key2){
                    console.log(`${key}:${k}=>${key2[k]}`)
                }
            } else {
                console.log(`${key}=>${v[key]}`)
            }
        }
    })
    } catch (error) {
        console.log(`error: ${error}`)
    }
    
}
getJsonData()
