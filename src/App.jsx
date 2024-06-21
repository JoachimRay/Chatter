import Notification from "./components/notification/Notification";
import Chat from "./components/chat/Chat";
import Detail from "./components/details/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";



const App = () => {

  const user = true;
  return (
    <div className='container'>

      {user ? (
        <>
        <List/>
        <Chat/>
        <Detail/>
        </>
      ) : (
        <Login/>
      )}
      <Notification/>
     
    </div>
  )
}
export default App