import "./addUser.css"


const AddUser = () => {
    return (

        <div className="AddUser">
            <form action="">
                <input type="text" placeholder="Username" name="Username" />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="details">
                    <img src="./avatar.png" alt="" />
                    <span>Joachim Chiong</span>
                </div>
                <button>
                Add user         
                </button>

            </div>
        </div>
    )
}


export default AddUser