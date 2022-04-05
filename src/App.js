import {useState,useContext} from 'react'
import {GeneralAuthContext} from './contex/GeneralAuthContext'
import logo from './logo.svg';
import './App.css';
import FormProducts from './components/FormProducts';

function App() {
  const {sigUpwithEmailAndPassword,user,logOut,logignWithEmail} = useContext(GeneralAuthContext)

  const [newUser,setNewUser] = useState({email:"",password:""})
  const [loginUser,setLoginUser] = useState({email:"",password:""})
  return (
    <div className="App">
      <header className="App-header">
        <FormProducts/>
      </header>
    </div>
  );
}

export default App;
