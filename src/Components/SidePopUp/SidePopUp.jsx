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


const SidePopUp = () => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return (
    <div className={styles.main} >
          <Accordion open={open} toggle={toggle} onFocus >
            <h3>Settings</h3>
        <AccordionItem>
          <AccordionHeader targetId="1"><MdOutlineLocalShipping size={"25px"}/> <strong>Apps & Integration</strong> </AccordionHeader>
          <AccordionBody accordionId="1">
             <ul>
               <Link to="/sales" > <li>Sales channel Apps</li></Link>
                <li>Shipping Apps</li>
                <li>POS Apps</li>
                <li>ERP Apps</li>
                <li>SMS</li>
                <li>Payments</li>
                <li>WhatsApp Business</li>
                <li>Other Apps</li>
             </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"><MdOutlineLocalShipping size={"25px"}/><strong>Omniful App settings</strong> </AccordionHeader>
          <AccordionBody accordionId="2">
           <ul>
            <li>Picker App</li>
            <li>Driver App</li>
            <li>Put-Away & Inventory</li>
           </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"> <MdOutlineLocalShipping size={"25px"}/><strong>Hub Management</strong> </AccordionHeader>
          <AccordionBody accordionId="3">
            <ul>
                <Link to={"/hubs"} > <li>Hubs</li></Link>
                <li>Locations</li>
                <li>Bins</li>
                <li>Consolidation area</li>
                <li>Stations</li>
                <li>Hub settings</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4"> <MdOutlineLocalShipping size={"25px"} /><strong>Account settings</strong> </AccordionHeader>
          <AccordionBody accordionId="4">
            <ul>
                <li>Locations</li>
                <li>Bins</li>
                <li>Consolidation area</li>
                <li>Stations</li>
                <li>Hub settings</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default SidePopUp