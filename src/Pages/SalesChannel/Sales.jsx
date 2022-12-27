import React from "react";
import {  Breadcrumb, Container } from "reactstrap";
import Cards from "./Cards";
import styles from "./Sales.module.css";
import { data1, data2 } from "../../Data/db";

const Sales = () => {
  return (
    <Container className={styles.main}>
      <h4>Sales channel Apps</h4>

      <Breadcrumb className={styles.breadCrumbs}>
        <span>
          {" "}
          <p>Integrated</p> <div className={styles.bread}>{data1?.length+data2?.length} </div>{" "}
        </span>
        <span>
          {" "}
          <p>All Channels</p>
          <div className={styles.bread}>18</div>{" "}
        </span>
        <span>
          <p>Comming soon</p>
          <div className={styles.bread}>9</div>{" "}
        </span>
      </Breadcrumb>

      <div className={styles.span2}>
        <div className={styles.span1}></div>{" "}
        <div>
          <h5>Sales channel ({data1?.length})</h5>
        </div>{" "}
      </div>
      <Container className={styles.cardBox}>
        <Cards data={data1} />
      </Container>

      <div className={styles.span2}>
        <div className={styles.span1}></div>{" "}
        <div>
          <h5>Market Places ({data2?.length})</h5>
        </div>{" "}
      </div>
      <Container className={styles.cardBox}>
        <Cards data={data2} />
      </Container>
    </Container>
  );
};

export default Sales;
