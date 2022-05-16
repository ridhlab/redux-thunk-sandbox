import React from "react";
import styles from "./style.module.css";

const Card = ({ children }) => {
    return <div className={styles.wrapperCard}>{children}</div>;
};

export default Card;
