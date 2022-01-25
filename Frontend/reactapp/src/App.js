import './App.css';
import React,{useState} from "react";
import EditUser from './Components/EditUser';
import users from "./Components/userDetails";

function App() {
  /* */

  const [usersList,updateUsersList] = useState(users);
  const [isClicked,setIsClicked] = useState(false);
  const [user,setUser] = useState({});
  const [id,setId] = useState(0);

  const handleClick = function(userItem,index){
    setIsClicked(true);
    setUser(userItem);
    setId(index);
  }

  const editUserObj = function(editedUserObj,index){
    usersList[index]=editedUserObj;
    updateUsersList(usersList);
  }

  return (
    <div className="App">
      {usersList.map((userItem,id)=>{
        return (
          <div key={id}>
            <table>
                <tr>
                  <td>Username :</td>
                  <td>{userItem.username}</td>
                </tr>
                <tr>
                  <td>Email id :</td>
                  <td>{userItem.email}</td>
                </tr>
                <tr>
                  <td>Phone :</td>
                  <td>{userItem.phone}</td>
                </tr>
            </table>
            <button 
              className='btn save'
              onClick={()=>handleClick(userItem,id)}
            >Edit</button>
          </div>
        )
      })}
      {isClicked 
      && 
      <EditUser 
        setIsClicked={setIsClicked}
        userObj={user}
        editUserObj={editUserObj}
        userId={id}
      />}
    </div>
  );
}

export default App;
