import React from 'react'
import styles from './Sidebar.module.css';
import logo from "../../Icons/Logo.svg";
import { GrHomeRounded } from "react-icons/gr";
import { BiDollarCircle } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineInsights } from "react-icons/md";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {FiUsers} from "react-icons/fi";
import { MdOutlinePolicy} from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { BsInboxes } from "react-icons/bs";

const Sidebar = () => {
 
  return (
    <div className={styles.main} >
       <div>
        <img src={logo} alt="Logo" className={styles.logo}/>
       </div>
       <div><GrHomeRounded fa-5x/></div>
       <div><BiDollarCircle/></div>
       <div><MdOutlineInsights/></div>
       <div><MdOutlineInventory2 fa-5x/></div>
       <div><BsInboxes/></div>
       <div><MdOutlineCategory/></div>
       <div><MdOutlineAccountBalanceWallet fa-5x/></div>
       <div><FiSettings/></div>
       <div><FiUsers/></div>
       <div><MdOutlinePolicy/></div>
       <div><MdOutlineContactSupport/></div>
       <div><MdOutlineLogout/></div>
    </div>
  )
}

export default Sidebar