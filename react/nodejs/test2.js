function Hi(){
    console.log('HI')
}

const a = [10,20,30,40]
const PI = 3.14159 ;
function getArea(radius){
    return PI*radius*radius
}
 function getCircumference(radius){
    return 2*PI*radius
}
let radius = 5
console.log(getCircumference(radius))

export {a,PI,getArea,getCircumference,Hi}
export default {PI,getArea,getCircumference,Hi,a}