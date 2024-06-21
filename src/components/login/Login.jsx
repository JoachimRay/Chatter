import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify";


const Login = () => {

    const [avatar, setAvatar] = useState({
        File: null,
        URL: "",
    });

    const handleAvatar = e => {

        if (e.target.files[0]){
        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0]),
        })
     }
    }

    const handleLogin = e => {
        e.preventDefault() 

    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>

                    <input type="text" placeholder="Email" name="Email" />
                    <input type="text" placeholder= "Password" name="password" id="" />
                    <button>Sign in</button>
                </form>
            </div>
            <div className="Separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form action="">
                    <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" />
                         Upload an Image </label>
                   
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar} />
                   <input type="text" placeholder="Username" name="Username"/>
                   <input type="text" placeholder="Email" name="Email" />
                    <input type="text" placeholder= "Password" name="password" id="" />
                    <button>Sign Up</button>
                    </form>
            </div>
        </div>
    )
}

export default Login