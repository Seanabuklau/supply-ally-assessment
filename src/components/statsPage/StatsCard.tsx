import React from 'react';
import './statscard.css'
import { useNavigate } from "react-router-dom";

const StatsCard: React.FC = () =>{
const navigate = useNavigate();
return(
<div className="stats-container">
    <section className="stats-header-container">
        <div>
            <div className="stats-header-row top">
                <p>Statistics</p>
            </div>
            <div className="stats-header-row middle">
                <p>You tracked</p>
                <p>211</p>
                <p>Last tracked at 6.30PM</p>
            </div>
            <div className="stats-header-row bottom">
                <div className="stats-header-date">
                    <img src="images/left-arrow.png" alt="left arrow" width="14" height="16" />
                    <p>14 Feb 2023</p>
                    <img src="images/right-arrow.png" alt="right arrow" width="14" height="16" />
                </div>
            </div>
        </div>
    </section>
    <section className="stats-history-container">
        <div>
            <div className="stats-history-record header">
                <div>
                    <p>Tracking ID</p>
                </div>
                <div>
                    <p>Last Updated Date</p>
                </div>
            </div>
            <div className="stats-history-record data top">
                <div>
                    <p>11190738200</p>
                </div>
                <div>
                    <p>12 Feb 2023, 12.23PM</p>
                </div>
            </div>
            <div className="stats-history-record data">
                <div>
                    <p>11168320300</p>
                </div>
                <div>
                    <p>12 Feb 2023, 12.23PM</p>
                </div>
            </div>
            <div className="stats-history-record data">
                <div>
                    <p>11189020500</p>
                </div>
                <div>
                    <p>12 Feb 2023, 12.23PM</p>
                </div>
            </div>
            <div className="stats-history-record data">
                <div>
                    <p>11191537500</p>
                </div>
                <div>
                    <p>12 Feb 2023, 12.23PM</p>
                </div>
            </div>
            <div className="stats-history-record data">
                <div>
                    <p>11191537500</p>
                </div>
                <div>
                    <p>12 Feb 2023, 12.23PM</p>
                </div>
            </div>
        </div>
    </section>
    <section className="stats-button-container">
        <div>
            <button onClick={() => navigate("/details")}>Back</button>
        </div>
    </section>
</div>
)
}

export default StatsCard