import React from 'react'
import DetailsCard from './DetailsCard'
import Footer from '../footer/Footer'
import Navbar from '../navBar/Navbar'
import "./detailspage.css";

const DetailsPage: React.FC = () =>{
return (
<div className='main'>
    <div className='header'>
        <Navbar />
    </div>
    <div className='body'>
        <div className='body-wrapper'>
            <DetailsCard />
        </div>
    </div>
    <div className='bottom'>
        <Footer />
    </div>
</div>
)
}

export default DetailsPage