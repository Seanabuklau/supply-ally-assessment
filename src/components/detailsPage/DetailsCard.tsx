import React, {useState} from 'react';
import './detailscard.css'
import { useNavigate } from "react-router-dom";

const DetailsCard: React.FC = () =>{

const navigate = useNavigate();

const [status, setStatus] = useState<boolean>(false)

const handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void = (e) => {
    setStatus(e.target.checked);
  }

const handleSubmit:(e:React.MouseEvent<HTMLElement>) => void = (e)=>{
    if(status===true){
        navigate("/stats")
    }else{
        alert("Please mark checkbox to proceed") 
    }
  }

return (
<div className={"details-container"}>
    <div className={"details-card"}>
        <div className={"details-card-contents"}>
            <section className={"tracking-id-section"}>
                <div className={"tracking-id"}>
                    <img src="images/box.png" alt="Box" width="35" height="40" />
                    <div>
                        <p>Tracking ID</p>
                        <p>123456ABC</p>
                    </div>
                </div>
            </section>
            <section className={"tracking-details-section"}>
                <div className={"tracking-details-wrapper"}>
                    <div className={"tracking-details"}>
                        <div>
                            <p>Monday, 13 Feb</p>
                            <div className={"one tracking-details-time-status"}>
                                <p>2.22 PM</p>
                                <p>Package in transit. Flight containing package has departed.</p>
                            </div>
                        </div>
                        <div>
                            <p>Sunday, 12 Feb</p>
                            <div className={"two tracking-details-time-status"}>
                                <p>5.09 PM</p>
                                <p>Parcel left the carrier facility.</p>
                            </div>
                        </div>
                        <div>
                            <p>Friday, 10 Feb</p>
                            <div className={"three tracking-details-time-status"}>
                                <p>8.41 AM</p>
                                <p>Parcel arrived at a carrier facility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div className={"details-checkbox"}>
        <div>
            <div>
                <input type="checkbox" onChange={handleChange}/>
                <p>Mark as tracked.</p>
            </div>
        </div>
    </div>
    <div className={"details-buttons"}>
        <div>
            <div>
                <button onClick={() => navigate("/track")}>Back</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
</div>
)
}

export default DetailsCard