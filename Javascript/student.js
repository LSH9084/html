const bb = {
    name:"홍길동",
    kor:100,
    eng:20,
    mat:50,
    totFun : function(){
        console.log(this.kor+this.mat+this.eng)
    },
    avgFun : function(){
        console.log((this.kor+this.eng+this.mat)/3)
    }  
}

console.log(bb.totFun())

