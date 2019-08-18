import React from "react"
import { Link } from "gatsby"

const NavLink = ({ link }) => {
  return (
    <li key={link.id}>
      <Link to={link.path}>{link.name}</Link>
    </li>
  )
}

export default NavLink
