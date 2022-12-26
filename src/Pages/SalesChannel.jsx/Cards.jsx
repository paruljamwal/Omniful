import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { data1, data2 } from "../../Data/db";
import styles from "./Sales.module.css";

const Cards = () => {
  return (
    <>
      {data1?.map((card) => (
        <Card className={styles.card}>
          <CardText
            className={
              card.status == "Active" ? styles.active : styles.inactive
            }
          >
            {card.status}
          </CardText>
          <CardImg className={styles.image}  src={card.logo} />
          <CardBody>
            <CardTitle className={styles.name} >{card.name}</CardTitle>
            <CardSubtitle className={styles.title} >{card.title}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default Cards;
