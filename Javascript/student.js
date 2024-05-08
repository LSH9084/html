const bb = {
    name:"홍길동",
    kor:30,
    eng:20,
    mat:50,
    totFun : function(){
        return(this.kor+this.mat+this.eng)
    },
    avgFun : function(){
        return((this.kor+this.eng+this.mat)/3)
    }  
}

console.log("이름:",bb.name,"총점:",bb.totFun(),"평균:",bb.avgFun())


