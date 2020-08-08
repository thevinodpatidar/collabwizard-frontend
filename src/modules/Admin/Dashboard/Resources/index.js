import React, { Component } from 'react'
import { Row,Tabs} from 'antd';
import { Videos }  from "./Videos";
// import PropTypes from 'prop-types'

import styles from "./index.module.scss";

const { TabPane } = Tabs;


class Resources extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>Public Resources</h1>
            </div>
            <Row>
                <Tabs>
                    <TabPane tab="Videos" key="1">
                        <Videos />
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

export default Resources;
