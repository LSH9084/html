// import * as m from './test2.js'

// console.log(m.Hi())
// console.log(m.a)
// console.log(m.PI)
// console.log(m.getCircumference(1),m.getArea(1))

import lodash from "lodash"
const arr = [1,1,1,7,7,7,7,7,7,2,2,1,1,4,4,3,2]
const uniqBy = lodash.uniqBy(arr)
console.log(uniqBy)
