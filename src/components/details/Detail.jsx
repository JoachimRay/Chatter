import "./details.css"
import { auth } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Detail = () => {

    const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();
    const {currentUser} = useUserStore();

    const handleBlock = async () => {

        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id)

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            })
            changeBlock()
        }catch(err){
            console.log(err)
        }

    }
    return (
        <div className="detail">  
        <div className="user">
            <img src={user?.avatar || "./avatar.png"} alt="" />
            <h2>{user?.username}</h2>
            <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="info">


          
            <div className="option">
                <div className="title">
                    <span> Chat Settings </span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Privacy & Help</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>




            <div className="option">
                <div className="title">
                    <span>Share Photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photos">



                    <div className="photoItem">
                        <div className="photoDetails">
                        <img src="https://images.pexels.com/photos/24415135/pexels-photo-24415135/free-photo-of-penhaligon-s-paris-boutique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
                        <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />          
                    </div>

                    <div className="photoItem">
                        <div className="photoDetails">
                        <img src="https://images.pexels.com/photos/24415135/pexels-photo-24415135/free-photo-of-penhaligon-s-paris-boutique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
                        <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />          
                    </div>

                    <div className="photoItem">
                        <div className="photoDetails">
                        <img src="https://images.pexels.com/photos/24415135/pexels-photo-24415135/free-photo-of-penhaligon-s-paris-boutique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
                        <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>          
                    </div>
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <button onClick={handleBlock}>
         {isCurrentUserBlocked ?"You are Blocked" : isReceiverBlocked ? "user blocked" : "blocked User"}
            </button>

            <button className="logout" onClick={() => auth.signOut()}> Logout </button>
            </div>           
        </div>
    );
};

export default Detail;