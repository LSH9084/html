//출력용 데이터 배열
const userList = [
    {id:1, name:'곰', address:'서울'},
    {id:2, name:'호랑이', address:'부산'},
    {id:3, name:'사자', address:'창원'},
]
// userData = userList[{}]

// console.log('userList:',userList)
const container = document.querySelector('.container')


// container.innerHTML += '홍길동'
userList.forEach((userDat) => {
//     console.log(userData.id,
//                 userData.name,
//                 userData.address)
// })

// container.innerHTML += userData.id 
// container.innerHTML += userData.name
// container.innerHTML += userData.address

container.innerHTML += `
<div class="card">
   <h2>${userDat.name}</h2>
   <p>${userDat.address}</p>
   </div>
   `
})

