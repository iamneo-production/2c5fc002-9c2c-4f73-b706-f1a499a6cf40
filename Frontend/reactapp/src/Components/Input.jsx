import React from "react"
import "./EditUser.css";

function Input(props){
    const {label,value} = props;

    return(
        <div className="details-container">
            <div className="label-div">
                <label className="label">{label} : </label>
            </div>
            <div className="input-div">
                <input className="input" type="text"/>
            </div>
        </div>
    )
}

export default Input;