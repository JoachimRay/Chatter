import { useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/AddUser";



const ChatList = () => {

    const [addMode, setAddMode] = useState(false);
    return (
        <div className="chatlists">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" name="" id="" />
                </div>
                <img src={addMode ? "./minus.png" :"./plus.png"} alt="" className="add" onClick={() => setAddMode((prev) => ! prev)}/>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mika Manuel</span>
                    <p>Hello!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mika Manuel</span>
                    <p>Hello!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mika Manuel</span>
                    <p>Hello!</p>
                </div>
            </div>
            
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mika Manuel</span>
                    <p>Hello!</p>
                </div>
            </div>
            {addMode && <AddUser/>}
        </div>
    )
}

export default ChatList