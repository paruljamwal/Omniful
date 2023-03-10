import React, { useState }  from 'react'
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
import SidePopUp from '../SidePopUp/SidePopUp';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [open,setOpen] = useState(false)
    const toggle=()=>{
      setOpen(!open);
    }


    const goToHome=()=>{
       navigate("/")
    }

  return (
    <>
    <div className={styles.main} >
       <div>
        <img onClick={goToHome} src={logo} alt="Logo" className={styles.logo}/>
       </div>
       <div onClick={goToHome} ><GrHomeRounded /></div>
       <div><BiDollarCircle/></div>
       <div><MdOutlineInsights/></div>
       <div><MdOutlineInventory2 /></div>
       <div><BsInboxes/></div>
       <div><MdOutlineCategory/></div>
       <div><MdOutlineAccountBalanceWallet /></div>
       <div onClick={toggle}><FiSettings/></div>
       <div><FiUsers/></div>
       <div><MdOutlinePolicy/></div>
        <hr></hr>
       <div><MdOutlineContactSupport/></div>
       <div><MdOutlineLogout/></div>
    </div>
    {
        open ? 
        <SidePopUp open={open} />
        : ""
    }
    </>
  )
}

export default Sidebar