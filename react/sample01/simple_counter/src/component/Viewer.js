

const Viewer = ({cnt}) =>{
    
    return(
        <div className="counter">
           현재 카운트: 
           <hr />
           <h1>{cnt}</h1>
        </div>
    );
}

export default Viewer;