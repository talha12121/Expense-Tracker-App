import React from 'react'
import "./Header.css"
import Logo from "../assets/money.webp"

export default function Header() {
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="nav_menu">
            <img className='moneyLogo' src={Logo} alt="" />
            <h3>
                EXPENSE TRACKER APP
            </h3>
        </div>
    </div>
   </div>
   </>
  )
}
