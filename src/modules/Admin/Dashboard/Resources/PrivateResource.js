import React, { Component } from 'react'
import { Row,Tabs} from 'antd';
import { Videos }  from "./Videos";
// import PropTypes from 'prop-types'

import styles from "./index.module.scss";
import Articles from './Articles/Articles';
// import Category from './components/Category';

const { TabPane } = Tabs;


class PrivateResources extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <h1 className={styles.heading}>Private Resources</h1>
                </div>
                <Row>
                    <Tabs style={{width:"100%"}}>
                        <TabPane tab="Videos" key="1">
                            <Videos  />
                        </TabPane>
                        <TabPane tab="Articles" key="2">
                            <Articles />
                        </TabPane>
                        {/* <TabPane tab="Category" key="3">
                            <Category />
                        </TabPane> */}
                    </Tabs>
                </Row>
            </div>
        )
    }
}

export default PrivateResources;
