import React, {useState} from 'react'
import "./logincard.css";
import { useNavigate } from "react-router-dom";

const LoginCard: React.FC = () =>{

    const navigate = useNavigate();

    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<boolean>(true)

    const handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void = (e)=>{
        const trackingNoInput = e.target.value;
        const regex = /^[A-Za-z\s]*$/;
        setStatus(!regex.test(trackingNoInput))
        if(!regex.test(trackingNoInput)){
                setError("! Input letters only")
            }else{
                setError("")
        }
    }

  return (
    <div className={"login-card-container"}>
      <div className={"login-card"}>
        <div className={"login-card-contents"}>
          <p>Login</p>
          <input type="text" name="user name" placeholder="Enter user name" onChange={handleChange}/>
          <span>{error}</span>
          <button onClick={() => navigate("/track")} disabled={status}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginCard