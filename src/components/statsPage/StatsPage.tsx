import React from 'react'
import StatsCard from './StatsCard'
import Footer from '../footer/Footer'
import Navbar from '../navBar/Navbar'
import "./statspage.css";

const StatsPage: React.FC = () =>{
return (
<div className='main'>
    <div className='header'>
        <Navbar />
    </div>
    <div className='body'>
        <div className='body-wrapper'>
            <StatsCard />
        </div>
    </div>
    <div className='bottom'>
        <Footer />
    </div>
</div>
)
}

export default StatsPage