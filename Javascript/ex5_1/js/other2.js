const PREF_LIST = [
    { value: 1100, name: '서울' },
    { value: 3611, name: '세종' },
    { value: 2600, name: '부산' },
    { value: 2700, name: '대구' },
    { value: 2800, name: '인천' },
    { value: 2900, name: '광주' },
    { value: 3000, name: '대전' },
    { value: 3100, name: '울산' },
    { value: 5011, name: '제주' },
    { value: 5013, name: '서귀포' },
    { value: 4111, name: '수원' },
    { value: 4128, name: '고양' },
    { value: 4113, name: '성남' },
    { value: 4146, name: '용인' },
    { value: 4119, name: '부천' },
    { value: 4127, name: '안산' },
    { value: 4122, name: '평택' },
    { value: 4115, name: '의정부' },
    { value: 4157, name: '김포' },
    { value: 4121, name: '광명' },
    { value: 4145, name: '하남' },
    { value: 4129, name: '과천' },
    { value: 4211, name: '춘천' },
    { value: 4213, name: '원주' },
    { value: 4215, name: '강릉' },
    { value: 4221, name: '속초' },
    { value: 4313, name: '충주' },
    { value: 4420, name: '아산' },
    { value: 4511, name: '전주' },
    { value: 4513, name: '군산' },
    { value: 4519, name: '남원' },
    { value: 4611, name: '목포' },
    { value: 4613, name: '여수' },
    { value: 4615, name: '순천' },
    { value: 4623, name: '광양' },
    { value: 4711, name: '포항' },
    { value: 4713, name: '경주' },
    { value: 4715, name: '김천' },
    { value: 4717, name: '안동' },
    { value: 4719, name: '구미' },
    { value: 4725, name: '상주' },
    { value: 4812, name: '창원' },
    { value: 4817, name: '진주' },
    { value: 4822, name: '통영' },
    { value: 4824, name: '사천' },
    { value: 4825, name: '김해' },
    { value: 4831, name: '거제' }
   
];
const result1 = document.querySelector('.result1')
// const randomNumber = Math.floor(Math.random()*47)
// console.log(randomNumber)

const pref = document.querySelector('#pref')
var optionString = "<option value=''>선택하세요</option>"
PREF_LIST.forEach((e)=>{
    // console.log(e.value,e.name)
    optionString = `<option value="${e.value}">${e.name}</option>`
    inserFun()
})
function inserFun(){
    pref.innerHTML += optionString
}

pref.addEventListener('change',valFun)
function valFun(){
    result1.innerHTML = `${pref.value}`
}



