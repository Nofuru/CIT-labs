import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({image}) => {
  return <img src={image} alt='' className={styles.avatar}/>;
};

export default Avatar;
