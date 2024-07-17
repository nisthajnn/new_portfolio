import React from 'react'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <a className="btn btn-outline text-xl">Nistha Jain</a>
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
      {/* <a> <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#020300,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
   Download Resume
  </button></a> */
  }
   <a className="btn btn-outline text-xl">Download Resume</a>
    </div>
  </div>
  )
}

export default Navbar