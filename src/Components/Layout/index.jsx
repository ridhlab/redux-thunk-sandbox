import React from "react";
import Header from "../Header";
import styles from "./style.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.container}>{children}</div>
        </>
    );
};

export default Layout;
