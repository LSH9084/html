console.log('===캡슐화 : 정보를 묶어 주는 기능, 정보은닉 기능===')

class SetGetClass {
    #myName = ''
    constructor(value){
        this.#myName = value
    }
    setmyName(value){
        this.#myName = value
    }
    getmyName(){
        return this.#myName
    }
}

const myInstance = new SetGetClass()
// myInstance.myName = '동순이'
// console.log(myInstance.myyName)
// myInstance.myName = "강감찬"


// myInstance.setmyName("강감찬")
myInstance.myName = '강감찬'
// console.log(myInstance.getmyName())
console.log(myInstance.myName)