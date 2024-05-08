console.log("===일반===")
async function load(){
    const data = await fetch('../sample/sample.txt')
    const text = await data.text()
    document.querySelector('#log').innerHTML = text
}

load()

console.log("===JSON구조===")
async function json_load(){
    const data = await fetch('../sample/sample.json')
    const json_data = await data.json()
    const json_data2 = JSON.stringify(json_data, null, '  ')
    console.log(json_data2)
}

json_load()

console.log("===XML데이터 읽기===")

async function xml_load(){
    const data = await fetch('../sample/sample.xml')
    const xml_data = await data.text()
    console.log(xml_data)
    const xml = new DOMParser().parseFromString(xml_data,'application/xml')
    document.querySelector('#log2').innerHTML = xml_data
    console.log(xml)
}
xml_load()

async function img_load(){
    const data = await fetch('../sample/sample.png')
    const img_data = await data.blob()
    const img = new Image()
    img.src = URL.createObjectURL(img_data)
    document.querySelector('#log3').appendChild(img)
}
img_load()