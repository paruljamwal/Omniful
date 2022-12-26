import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import styles from "./Hub.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import {BiChevronDown} from "react-icons/bi";
import {BiDotsVerticalRounded} from "react-icons/bi";


const HubCards = ({data}) => {

  return (
    <Container className={styles.cardBox}>
      {data?.map((card) => (
        <Card className={styles.card} key={card.id}>
          <div className={styles.head}>
            <div className={styles.headBox} >

            <div className={ card.status === "Active" ? styles.barActive : styles.barInActive} ></div>

            <CardTitle>{card.name}</CardTitle>
            <CardText
              className={
                  card.status === "Active" ? styles.active : styles.inactive
              }
              >
              {card.status}
            </CardText>
                <div>

            </div>
            </div>
            <div><BiDotsVerticalRounded/></div>

          </div>
          <CardBody>
            <div className={styles.loc} >
                <div>
              <GrLocation  className={styles.logo} />
                </div>

                <div>
              <CardTitle className={styles.name}>{card.address}</CardTitle>
              <CardSubtitle className={styles.street}>
                {card.street}
              </CardSubtitle>

                </div>
            </div>

            <div className={styles.loc} > 
                <div>
              <AiOutlineCalendar className={styles.logo}  />
                </div>
                <div>

              <CardTitle className={styles.name}>{card.day} <BiChevronDown/> </CardTitle>
              <CardSubtitle className={styles.date}>{card.date}</CardSubtitle>
                </div>
            </div>

            <div className={styles.loc} >
                <div>
              <FiPhoneCall className={styles.logo} />
                </div>
                <div>
              <CardTitle className={styles.name}>{card.phone}</CardTitle>
              <CardSubtitle className={styles.web}>{card.web}</CardSubtitle>

                </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default HubCards;
