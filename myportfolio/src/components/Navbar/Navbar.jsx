import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/"><i class="fas fa-home icon"></i>Home</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/about"><i class="fas fa-user icon"></i>About</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/experience"><i class="fas fa-briefcase icon"></i> Experience</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/projects"><i class="fas fa-laptop-code icon"></i>Projects</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/contact"><i class="fas fa-envelope icon"></i>Contact</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;