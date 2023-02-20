import React, {useState, useRef} from 'react'
import './navbar.css'

const Navbar: React.FC = () => {

    const [click, setClick] = useState<boolean>(false)
    const inputRef = useRef<HTMLDivElement>(null);

    const handleClick:(e:React.MouseEvent<HTMLImageElement>) => void = ()=>{
        setClick(!click)
        inputRef.current!.classList.toggle("responsive-nav");
    }

  return (
    <nav className='navbar-container'>
        <div className='navbar-contents'>
            <div className='navbar-logo'>
                <img src="images/supply_ally_logo.JPG" alt="Supply Ally Logo" width="128" height="28"/>
            </div>
            <div ref={inputRef} className='navbar-headers'>
                <div className='navbar-headers-tracking-stats'>
                    <div><p>Track</p></div>
                    <div><p>Statistics</p></div>
                </div>
                <div className='navbar-headers-login'>
                    <img className='navbar-header-remove' src="images/waving-hand.png" alt="Waving Hand" width="35" height="30"/>
                    <div className='navbar-header-remove'><p><span>Hi</span> Alex</p></div>
                    <div><p>Logout</p></div>
                </div>
            </div>
            <div className='toggle-btn' onClick={handleClick}>
                <img src={click ? "images/close.png" : "images/hamburger.png"} 
                alt="Toggle icons" 
                width="20" 
                height="20" 
                />
            </div>
        </div>
    </nav>
  )
}

export default Navbar