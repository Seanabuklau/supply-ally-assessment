import React from 'react'
import TrackingCard from './TrackingCard'
import Footer from '../footer/Footer'
import Navbar from '../navBar/Navbar'
import "./trackingpage.css";

const TrackingPage: React.FC = () =>{
return (
<div className='main'>
    <div className='header'>
        <Navbar />
    </div>
    <div className='body'>
        <div className='body-wrapper'>
            <TrackingCard />
        </div>
    </div>
    <div className='bottom'>
        <Footer />
    </div>
</div>
)
}

export default TrackingPage