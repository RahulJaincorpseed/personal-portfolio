import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="rj-navbar all-between">
      <div className="rj-logo">
        <i class="fa-brands fa-codiepie"></i>
        <span>RJ</span>
      </div>
      <div>
        <ul className="rj-links all-center">
          <li>
            <NavLink
               className={`rj-item  ${({ isActive }) =>
               isActive ? "active" : ""}`}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={`rj-item  ${({ isActive }) =>
               isActive ? "active" : ""}`} to={"/project"}>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink className={`rj-item  ${({ isActive }) =>
               isActive ? "active" : ""}`} to={"/articles"}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink className={`rj-item  ${({ isActive }) =>
               isActive ? "active" : ""}`} to={"/contact"}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={`rj-item  ${({ isActive }) =>
               isActive ? "active" : ""}`} to={"/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    <div>
    <Link className="rj-hire-btn">
        Hire Me
    </Link>
    </div>

    </nav>
  )
}

export default Navbar
