import {useState,useEffect} from "react";
import WelcomePage from "./pages/WelcomePage";
import SigninPage from "./pages/SigninPage";
import CreateAccount from "./pages/CreateAccount";
import AccountSettings from "./pages/AccountSettings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

const [message,setMessage]=useState("");

useEffect(()=>{
  fetch("http://localhost:2000/message")
  .then((res)=>res.json())
  .then((data)=>setMessage(data.message))
},[])




  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signIn" element={<SigninPage />} />
          <Route path="/signUp" element={<CreateAccount />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
