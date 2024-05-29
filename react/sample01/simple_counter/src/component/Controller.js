
function Controller ({setCnt,cnt}){
    const cntFun = (value) =>{
        setCnt(cnt + value)
    }
    return(
        <div className="controller">
           <button className="btn btn-secondary" onClick={ ()=> cntFun(-1) }>-1</button>  
           <button className="btn btn-secondary" onClick={ ()=> cntFun(-10) }>-10</button>
           <button className="btn btn-secondary" onClick={ ()=> cntFun(-100) }>-100</button>
           <button className="btn btn-secondary" onClick={ ()=> cntFun(+100) }>+100</button>
           <button className="btn btn-secondary" onClick={ ()=> cntFun(+10) }>+10</button>
           <button className="btn btn-secondary" onClick={ ()=> cntFun(+1) }>+1</button>
        </div>
    );
}

export default Controller;