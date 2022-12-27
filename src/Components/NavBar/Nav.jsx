import React from 'react'
import { Navbar} from 'reactstrap';
import styles from './Nav.module.css';
import {BiChevronDown} from "react-icons/bi";
import {BsLink} from "react-icons/bs";
import {VscBellDot} from "react-icons/vsc";
import {TfiHelpAlt} from "react-icons/tfi"
import flag from "../../Icons/Flag.svg";

const Nav = () => {
  return (
   <Navbar className={styles.Nabvar} >
    <select className={styles.link} > 
    <option className={styles.link}  value=""> <BsLink/> Quick Links <BiChevronDown/> </option>
    <option value="Omni">OmniFull</option> </select>
    <div className={styles.help__icons} >
    <div><img src={flag} alt="Flag"/>  English</div>
    <div><VscBellDot/></div>
    <div><TfiHelpAlt/></div>
    </div>
   </Navbar>
  )
}

export default Nav;