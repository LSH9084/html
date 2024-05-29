import { useState } from "react";



function BodyState2 (){
    const [name,setName ] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("")
    const [bio, setBio]= useState("")
    const [state, setState] = useState({
        name: "",
        gender:"",
        birth:"",
        bio:""
    })
    function handleOnChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    function onChangeName(e){
        setName(e.target.value)

    }
    function genderFun(e){
        setGender(e.target.value)
        console.log(gender)
    }
    function birthFun(e){
        setBirth(e.target.value)
        console.log(birth)
    }
    function bioFun(e){
        setBio(e.target.value)
        console.log(bio)
    }


    return(
        <div>
            <div>
                <input value={state.name} onChange={handleOnChange} placeholder="이름" />
            </div>
            <div>
                <select value={state.gender} onChange={handleOnChange}>
                    <option value={"여성"}>여성</option>
                    <option value={"남성"}>남성</option>
                </select>
            </div>
            <div>
                <input value={state.birth}  type="date" onChange={handleOnChange} />
            </div>
            <div>
                <textarea cols={50} rows={15} value={state.bio} onChange={handleOnChange}></textarea>
            </div>
        </div>
    );
}


export default BodyState2;