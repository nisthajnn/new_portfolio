import React from 'react'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <a className="btn btn-ghost text-xl">Nistha Jain</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Experience</a></li>
        <li><a>Projects</a></li>
        <li><a>Education</a></li>
        <li><a>Skills</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn text-xl">Get in Touch</a>
    </div>
  </div>
  )
}

export default Navbar