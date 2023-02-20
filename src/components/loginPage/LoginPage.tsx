import React from 'react';
import LoginCard from './LoginCard'
import Footer from '../footer/Footer'
import Navbar from '../navBar/Navbar'
import "./loginpage.css";

const LoginPage: React.FC = () =>{

    return(
        <div className='main'>
            <div className='header'>
                <Navbar/>
            </div>
            <div className='body'>
                <div className='body-wrapper'>
                    <LoginCard/>
                </div>
            </div>
            <div className='bottom'>
                <Footer/>
            </div>
        </div>
    )
}

export default LoginPage