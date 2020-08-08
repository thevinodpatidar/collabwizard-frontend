import React from 'react'
import { Col, Row, Button, Drawer } from 'antd'
import { Link } from 'react-router-dom'
import { MenuOutlined, LogoutOutlined } from '@ant-design/icons'

import styles from "./LoggedIn.module.scss";

function LoggedIn({showDrawer,logout,onClose,Visible,props}) {
    return (
        <nav className={styles.navbar}>
        <Link to="/dashboard" >
            <h2>School Tribe</h2>
        </Link> 
        <div className={styles.desktop}>
            <Row className={styles.buttons} gutter={24}>
                <Col>
                <Link to="/login" onClick={logout} className="signup-form-button link" >
                    Logout <LogoutOutlined style={{ color: '#08c' }} />
                </Link>
                </Col>
            </Row>
        </div>
        <div className={styles.mobile}>
            <Button className={styles.barMenu} onClick={showDrawer}>
                <MenuOutlined style={{ color: '#08c',outline :"none" }} />
            </Button>
            <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={Visible}
            onClick={onClose}
            >
                <div className={styles.links}>
                    <Row className={styles.row} gutter={24}>
                        <Col className={styles.col} span={24} >
                            <LogoutOutlined style={{ color: '#08c' }} /> 
                            <Link onClick={logout} to="/login"  className={styles.link}>
                                Logout
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Drawer>
        </div>
    </nav>
    )
}

export default LoggedIn
