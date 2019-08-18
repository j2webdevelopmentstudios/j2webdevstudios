import React, { useState } from "react"
import NavLogo from "./NavLogo/NavLogo.js"
import NavLink from "./NavLinks/NavLink.js"
import NavIcons from "./NavIcons/NavIcons.js"

const Navbar = props => {
  const links = [
    {
      id: 0,
      path: "/",
      name: "home",
    },
    {
      id: 1,
      path: "/about",
      name: "about",
    },
    {
      id: 2,
      path: "/services",
      name: "services",
    },
    {
      id: 3,
      path: "/blog",
      name: "blog",
    },
    {
      id: 4,
      path: "/contact",
      name: "contact",
    },
    {
      id: 5,
      path: "/portfolio",
      name: "portfolio",
    },
  ]
  const [navLinks] = useState(links)
  return (
    <nav>
      <NavLogo />
      <ul>
        {navLinks.map(link => {
          return <NavLink key={link.id} link={link} />
        })}
      </ul>
      <NavIcons />
    </nav>
  )
}

export default Navbar
//<NavIcons />
