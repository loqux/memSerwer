import React from "react";
import ImgPage404 from "./404Page.png";
import { Card, Typography } from "@material-ui/core";
import styles from "./Page404.module.css";

const Page404 = () => {
  return (
    <Card className={styles.card}>
      <Typography variant="h2" color="primary">
        Page not found!
      </Typography>
      <img className={styles.img} alt="Page not found" src={ImgPage404} />
    </Card>
  );
};

export default Page404;
