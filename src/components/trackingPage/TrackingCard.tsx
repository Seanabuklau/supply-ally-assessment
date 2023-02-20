import React, {useState, useRef} from 'react';
import './trackingcard.css'
import { useNavigate } from "react-router-dom";

const TrackingCard: React.FC = () =>{

    const navigate = useNavigate();

    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<boolean>(true)
    const Logininput = useRef<any>("")

    const handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void = (e)=>{
        const trackingNoInput = e.target.value;
        const regex = /^\d{10}$/;
        setStatus(!regex.test(trackingNoInput))
        if(!regex.test(trackingNoInput)){
                setError("! Input valid tracking number")
            }else{
                setError("")
        }
    }

    const handleClick:(e:React.MouseEvent<HTMLElement>) => void = (e)=>{
        if(status===false && Logininput.current.value!==""){
          navigate("/details")
        }else if(status===true && Logininput.current.value===""){
          alert("Please input tracking number")
        }else if(Logininput.current.value===""){
          alert("Please input tracking number")
        }
      }

return (
<div className={"tracking-card-container"}>
    <div className={"tracking-card"}>
        <div className={"tracking-card-contents"}>
            <p>Track Parcel</p>
            <p>Key in individual tracking number to <br/>track</p>
            <label>TrackingID</label>
            <input type="text" name="tracking" onChange={handleChange} ref={Logininput}/>
            <span>{error}</span>
            <button onClick={handleClick}>Track</button>
        </div>
    </div>
</div>
)
}

export default TrackingCard