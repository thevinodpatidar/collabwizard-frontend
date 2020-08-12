import React, { Component } from 'react'
import { Row,Tabs} from 'antd';
import { Videos }  from "./Videos";
// import PropTypes from 'prop-types'

import styles from "./index.module.scss";

const { TabPane } = Tabs;


class PrivateResources extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>Private Resources</h1>
            </div>
            <Row>
                <Tabs style={{width:"100%"}}>
                    <TabPane tab="Videos" key="1">
                        {/* <Videos  /> */}
                    </TabPane>
                    <TabPane tab="Articles" key="2">
                        Articles
                    </TabPane>
                </Tabs>
            </Row>
        </div>
        )
    }
}

export default PrivateResources;
