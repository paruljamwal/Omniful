import React from "react";
import { Badge, Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import Cards from "./Cards";
import styles from "./Sales.module.css";


const Sales = () => {



  return (
    <Container className={styles.main}>
      <h4>Sales channel Apps</h4>
      <Breadcrumb listTag="div">
        <BreadcrumbItem href="#" tag="a">
          Integrated <Badge color="primary">12</Badge>
        </BreadcrumbItem>
        <BreadcrumbItem href="#" tag="a">
          All channels <Badge color="primary">118</Badge>
        </BreadcrumbItem>
        <BreadcrumbItem href="#" tag="a">
          Comming soon <Badge pill >19</Badge>
        </BreadcrumbItem>
      </Breadcrumb>

        <h5>Sales channel (8)</h5>
        <Container className={styles.cardBox} >
           <Cards/>
        </Container>

    </Container>
  );
};

export default Sales;
