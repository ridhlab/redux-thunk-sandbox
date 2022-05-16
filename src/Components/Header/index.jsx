import React from "react";
import styles from "./style.module.css";

const Header = () => {
    return (
        <div className={styles.wrapperHeader}>
            <div className={styles.header}>
                <h1>Redux Thunk Sandbox</h1>
            </div>
        </div>
    );
};

export default Header;
