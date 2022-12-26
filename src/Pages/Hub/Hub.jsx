import React from "react";
import { Breadcrumb, Button, Container } from "reactstrap";
import styles from "./Hub.module.css";
import HubCards from "./HubCards";
import { hubData } from "../../Data/db";

const Hub = () => {
  return (
    <Container>
      <div className={styles.header}>
        <div>
          {" "}
          <h4> Hubs</h4>
        </div>
        <div>
          <Button className={styles.createNew}>+ Create New</Button>
        </div>
      </div>

      <Breadcrumb className={styles.breadCrumbs}>
        <span>
          {" "}
          <p>All Hubs</p> <div className={styles.bread}>{hubData?.length}</div>{" "}
        </span>
      </Breadcrumb>

      <HubCards data={hubData} />
    </Container>
  );
};

export default Hub;
