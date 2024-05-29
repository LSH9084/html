import {useState} from "react";


function BodyState(){
    const name = "홍길순"
    const [count, setCount] = useState(0);
    const [text, setText] = useState("")
    const [date,setDate] = useState()
    const [option,setOption] = useState()
    const [tarea,settArea] = useState()
    const onIncrease =() =>{
        setCount(count+1)
    }
    function inputOnChange(e){
        setText(e.target.value)
    }
    function dateOnChange(e){
        console.log("date change...")
        setDate(e.target.value)
    }
    function selectOnChange(e){
        setOption(e.target.value)
    }
    function textareaChange(e){
        settArea(e.target.value)
    }
    


    return(
        <div>
            <h2>{name}</h2>
            <hr/>
            <h1>useState로 관리하는 count변수</h1>
            <h2>{count}</h2>
            <button onClick={onIncrease}>1씩 증가</button>
            <hr/>
            <input onChange={inputOnChange}/>
            <div>
                {text}
            </div>
            <input type="date" value={date} onChange={dateOnChange} />
            <hr/>
            <select onChange={selectOnChange} value={option}>
                <option key="1">1번</option>
                <option key="2">2번</option>
                <option key="3">3번</option>
                <option key="4">4번</option>
                <option key="5">5번</option>
            </select>
            <hr/>
            <textarea cols={50} value={tarea} onChange={textareaChange} rows={15}></textarea>


            </div>
    );    
}

export default BodyState;