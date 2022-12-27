import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import styles from "./Sales.module.css";

const Cards = ({data}) => {
  return (
    <>
      {data?.map((card) => (
        <Card key={card.id} className={styles.card}>
          <CardText
            className={
              card.status === "Active" ? styles.active : styles.inactive
            }
          >
            {card.status}
          </CardText>
          <CardImg  className={styles.image}  src={card.logo} />
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
