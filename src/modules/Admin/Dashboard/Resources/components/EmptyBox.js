import React from 'react'
import { Col } from 'antd'
import emptybox from "../../../../../assets/images/emptybox.svg";
import styles from "./EmptyBox.module.scss";

function EmptyBox() {
    return (
        <Col className={styles.emptyContainer}>
            <img src={emptybox} alt="empty box" />
            <div>No record found</div>
            <h4>Try adding new records.</h4>
        </Col>
    )
}

export default EmptyBox;
