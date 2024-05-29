

function BodyEvent(){
    function handleOnClick(){
        alert("버튼을 클릭하셧군요!!!")
    }
    function handleOnClick2(e){
        if(e.target.name == "A버튼"){
            console.log("A")
        } else {
            console.log("B")
        }
    }
    

    return(

        <div>
            <button onClick={handleOnClick}>Event</button>
            <button name="A버튼" onClick={handleOnClick2}>A버튼</button>
            <button name="B버튼" onClick={handleOnClick2}>B버튼</button>
        </div>

    );
}


export default BodyEvent;