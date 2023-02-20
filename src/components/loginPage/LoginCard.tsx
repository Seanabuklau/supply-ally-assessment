import React, {useState, useRef} from 'react'
import "./logincard.css";
import { useNavigate } from "react-router-dom";

const LoginCard: React.FC = () =>{

    const navigate = useNavigate();

    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<boolean>(true)
    const Logininput = useRef<any>("")

    const handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void = (e)=>{
        const trackingNoInput = e.target.value;
        const regex = /^[A-Za-z\s]*$/;
        setStatus(!regex.test(trackingNoInput))
        if(!regex.test(trackingNoInput)){
                setError("! Input letters or spaces only")
            }else{
                setError("")
        }
    }

    const handleClick:(e:React.MouseEvent<HTMLElement>) => void = (e)=>{
      if(status===false && Logininput.current.value!==""){
        navigate("/track")
      }else if(status===true && Logininput.current.value===""){
        alert("Please input login name")
      }else if(Logininput.current.value===""){
        alert("Please input login name")
      }
    }

  return (
    <div className={"login-card-container"}>
      <div className={"login-card"}>
        <div className={"login-card-contents"}>
          <p>Login</p>
          <input type="text" name="user name" placeholder="Enter user name" onChange={handleChange} ref={Logininput}/>
          <span>{error}</span>
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginCard