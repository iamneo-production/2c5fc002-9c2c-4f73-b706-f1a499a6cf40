import React,{useState} from "react";
import "./EditUser.css";
import userImage from "../images/user-icon-2.jpg";
import Input from "./Input.jsx";

function EditUser(props){

    //description of the props from App.js
    /*
    1.userObj - type object,used to display the details in the input field
    2.setIsClicked - hook used to close the pop-modal-windoe(used in cancel button)
    3.editUserObj- hook used to update the userObj (which is a state from App.js) newly edited values 
    4.userId - index number of the users array (array of objects which contains the user details)
                this id is used to update the array with new values.
    */ 


    const {userObj,setIsClicked,editUserObj,userId} = props;

    //this is used to track the changes
    const [user,setUser] = useState(userObj);

    const handleSave = function(e){
        e.preventDefault();
        editUserObj(user,userId);
        setIsClicked(false);
    }

    return (
        <div className="overlay">
            <div className="user-info">
                <div>
                    <img className="user-image" src={userImage} alt="user-image" />
                </div>
                <div className="info">
                    <form onSubmit={handleSave}>
                        <Input
                            label="Username"
                            value={user.username}
                            setUser={setUser}
                            name="username"
                        />
                        <Input
                            label="Email id"
                            value={user.email}
                            setUser={setUser}
                            name="email"
                        />
                        <Input
                            label="Phone number"
                            value={user.phone}
                            setUser={setUser}
                            name="phone"
                        />
                        <div className="btn-div">
                            <button 
                                className="btn save"   
                            >Save</button>
                            <button 
                                className="btn cancel"
                                onClick={()=>setIsClicked(false)}
                            >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default EditUser;