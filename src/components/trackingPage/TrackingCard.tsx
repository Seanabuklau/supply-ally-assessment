import React, {useState} from 'react';
import './trackingcard.css'
import { useNavigate } from "react-router-dom";

const TrackingCard: React.FC = () =>{

    const navigate = useNavigate();

    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<boolean>(true)

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

return (
<div className={"tracking-card-container"}>
    <div className={"tracking-card"}>
        <div className={"tracking-card-contents"}>
            <p>Track Parcel</p>
            <p>Key in individual tracking number to <br/>track</p>
            <label>TrackingID</label>
            <input type="text" name="tracking" onChange={handleChange}/>
            <span>{error}</span>
            <button onClick={()=> navigate("/details")} disabled={status}>Track</button>
        </div>
    </div>
</div>
)
}

export default TrackingCard