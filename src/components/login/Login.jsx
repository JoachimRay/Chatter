import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import {doc, setDoc} from "firebase/firestore"
import Upload from "../../lib/upload";


const Login = () => {

    const [avatar, setAvatar] = useState({
        File: null,
        URL: "",
    });

    const [loading, setLoading] = useState(false);

    const handleAvatar = e => {
        if (e.target.files[0]){
        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0]),
        })
     }
    }

    const handleRegister = async (e) => {
        setLoading(true)
        e.preventDefault() 
        const formData = new FormData(e.target);
        const {username,email,password } = Object.fromEntries(formData);

        try{

            const imgUrl = await Upload(avatar.file)

            const res = await createUserWithEmailAndPassword(auth,email,password);


            await setDoc(doc(db, "users", res.user.uid),{

                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked:[],

            });

            
            await setDoc(doc(db, "userchats", res.user.uid),{

               chats: [],

            });



            toast.success("Account Created!")

        }catch(err){
            console.xlog(err)
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault() 
        setLoading(true);
        const formData = new FormData(e.target);
        const { email,password } = Object.fromEntries(formData);

        try {

            await signInWithEmailAndPassword(auth, email, password);

        }catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading (false);
        }
    };

    

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>

                    <input type="text" placeholder="Email" name="email" />
                    <input type="text" placeholder= "Password" name="password" id="" />
                    <button disabled={loading}>{loading ? "loading" : "Sign In"}</button>
                </form>
            </div>
            <div className="Separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister} autoComplete="off"> 
                    <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" />
                         Upload an Image </label>
                   
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar} autoComplete="off" />
                   <input type="text" placeholder="Username" name="username" autoComplete="off"/>
                   <input type="text" placeholder="Email" name="email" autoComplete="off" />
                    <input type="text" placeholder= "Password" name="password" id=""  autoComplete="off"/>
                    <button disabled={loading}>{loading ? "loading" : "Sign Up"}</button>
                    </form>
            </div>
        </div>
    )
}

export default Login