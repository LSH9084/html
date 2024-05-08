console.log('===인스턴스 생성 없이 메소드 호출===')
class MyStatic {
    static method(){
        console.log('정적 메소드.....')
    }
    static myName(firstName, familName){
        console.log(`${firstName}${familName}`)
    }
}
MyStatic.method()
MyStatic.myName('그레고리','포터')

