import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-primary">
  <div className="container-fluid col-10" >
     <NavLink className="navbar-brand" to="#">Navbar</NavLink> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/taskOne" className="nav-link" >Task_1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/taskTwo" className="nav-link" >Task_2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/taskThree" className="nav-link" >Task_3</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/taskFour" className="nav-link" >Task_4</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar