import React,{useState} from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import styles from './SidePop.module.css';
import { MdOutlineLocalShipping} from "react-icons/md";
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';


const SidePopUp = () => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return createPortal(
    <div className={styles.main} >
          <Accordion className={styles.Accordion} open={open} toggle={toggle} onFocus >
            <h3>Settings</h3>
        <AccordionItem className={styles.Accordion}  >
          <AccordionHeader targetId="1"  ><MdOutlineLocalShipping size={"25px"} /> Apps & Integration </AccordionHeader>
          <AccordionBody accordionId="1" >
             <div className={styles.details} >
               <Link to="/sales" > <p> <MdOutlineLocalShipping size={"20px"}/> Sales channel Apps</p></Link>
                <p> <MdOutlineLocalShipping size={"20px"}/>  Shipping Apps</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> POS Apps</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> ERP Apps</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> SMS</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Payments</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> WhatsApp Business</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Other Apps</p>
             </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className={styles.Accordion} >
          <AccordionHeader targetId="2"><MdOutlineLocalShipping size={"25px"}/>Omniful App settings </AccordionHeader>
          <AccordionBody accordionId="2">
           <div className={styles.details}>
            <p> <MdOutlineLocalShipping size={"20px"}/> Picker App</p>
            <p> <MdOutlineLocalShipping size={"20px"}/> Driver App</p>
            <p> <MdOutlineLocalShipping size={"20px"}/> Put-Away & Inventory</p>
           </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className={styles.Accordion} >
          <AccordionHeader targetId="3"> <MdOutlineLocalShipping size={"25px"}/>Hub Management</AccordionHeader>
          <AccordionBody accordionId="3">
            <div className={styles.details}>
                <Link to={"/hubs"} > <p> <MdOutlineLocalShipping size={"20px"}/> Hubs</p></Link>
                <p> <MdOutlineLocalShipping size={"20px"}/> Locations</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Bins</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Consolidation area</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Stations</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Hub settings</p>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className={styles.Accordion} >
          <AccordionHeader targetId="4"> <MdOutlineLocalShipping size={"25px"} />Account settings </AccordionHeader>
          <AccordionBody accordionId="4">
            <div className={styles.details}>
                <p> <MdOutlineLocalShipping size={"20px"}/> Locations</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Bins</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Consolidation area</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Stations</p>
                <p> <MdOutlineLocalShipping size={"20px"}/> Hub settings</p>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>,
    document.getElementById("sidePopup")
  )
}

export default SidePopUp;