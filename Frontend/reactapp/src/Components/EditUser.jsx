import React from "react";
import "./EditUser.css";
import userImage from "../images/user-icon-2.jpg";
import Input from "./Input.jsx";

function EditUser(){

    const user = {
        username:"senthil kaasi",
        email:"senthilkaasi3101@gmail.com",
        phone:6384987868
    }

    const handleSave = function(e){
        e.preventDefault();
    }

    return (
        <div className="container">
            <div id="overlay"></div>
            <div className="user-info">
                <div>
                    <img className="user-image" src={userImage} alt="user-image" />
                </div>
                <div className="info">
                    <form onSubmit={handleSave}>
                        <Input
                            label="Username"
                            value={user.username}
                        />
                        <Input
                            label="Email id"
                            value={user.email}
                        />
                        <Input
                            label="Phone number"
                            value={user.phone}
                        />
                        <button className="btn-save">Save</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default EditUser;