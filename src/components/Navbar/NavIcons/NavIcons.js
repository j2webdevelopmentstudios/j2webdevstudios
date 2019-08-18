import React, { useState } from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaGithubSquare,
  FaSlack,
} from "react-icons/fa"

const NavIcons = props => {
  const icons = [
    {
      id: 0,
      icon: <FaFacebookSquare />,
      path: "https://facebook.com",
    },
    {
      id: 1,
      icon: <FaTwitterSquare />,
      path: "https://twitter.com",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      path: "https://instagram.com",
    },
    {
      id: 3,
      icon: <FaGithubSquare />,
      path: "https://github.com",
    },
    {
      id: 4,
      icon: <FaSlack />,
      path: "https://slack.com",
    },
  ]
  const [navIcons] = useState(icons)
  return (
    <div>
      {navIcons.map(icon => {
        return (
          <a
            href={icon.path}
            key={icon.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        )
      })}
    </div>
  )
}

export default NavIcons
