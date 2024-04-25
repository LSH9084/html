// 단일 기억장소 : 일반변수
// 복수 기억장소 : 배열구조, 객체(json)구조
// [] <<< 복수의 기억장소를 할당하겠다는 선언문에 들어가는 기호 []안에것들 모두 기억함

const myArray = ['팽귄','고래','참치'];

console.log(myArray)
myArray[2] = "팽돌이"
//배열 구조 데이터 보기 : [숫자]를 통해 불러옴
//n개의 기억장소 => n-1의 인덱스번호 표시
//배열구조 => "[데이터1,....]" 표시 = 
//객체구조 => "{'key':'value',...}" 표시 = 
console.log(myArray[1])


let myK = ['팽','돌','이','임']
console.log(myK)

const myObj = {id:[20,30,40] ,name:['홍길동','홍길순','이상훈']}
myObj.name= 10
myObj.id = '홍'
console.log(myObj)
console.log(myObj['홍길동'])
console.log(myObj.id)
console.log(myObj)
