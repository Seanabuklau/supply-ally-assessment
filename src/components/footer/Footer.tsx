import React from 'react'
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className={"footer-main"}>
      <div className={"footer-top"}>
        <p>SupplyAlly</p>
      </div>
      <div className={"footer-bottom"}>
        <div className={"footer-bottom-content"}>
          <p>Version 1.0.0</p>
          <p>Last updated 20 Dec 2021</p>
          <p>&copy; 2022 Government of Singapore</p>
        </div>
      </div>
    </div>
  )
}

export default Footer