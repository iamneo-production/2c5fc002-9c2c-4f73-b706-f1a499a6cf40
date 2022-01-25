import React from "react"
import "./EditUser.css";

function Input(props){
    const {label,value,setUser,name} = props;

    const handleChange = function(e){
        const {name,value} = e.target;
        setUser((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    return(
        <div className="details-container">
            <div className="label-div">
                <label className="label">{label} : </label>
            </div>
            <div className="input-div">
                <input 
                    className="input" 
                    type="text" 
                    name={name} 
                    value={value} 
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Input;