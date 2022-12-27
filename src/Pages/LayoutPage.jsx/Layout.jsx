import React, { useState } from 'react'
import { Container } from 'reactstrap';
import styles from "./Layout.module.css";

const Layout = () => {
  const [time,setTime] = useState(0);
  return (
    <Container className={styles.main} ></Container>
  )
}

export default Layout