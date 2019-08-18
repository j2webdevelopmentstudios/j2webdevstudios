import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo-light.png"
import "./NavLogo.css"

const NavLogo = props => {
  return (
    <div>
      <Link to="/">
        <img className="logo" src={logo} alt="J2 Web Dev Studios Logo" />
      </Link>
    </div>
  )
}

export default NavLogo
