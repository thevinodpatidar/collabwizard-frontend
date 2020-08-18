import React, { Component } from 'react'
// import { Videos }  from "./Videos";

import styles from "./index.module.scss";

class PublicResources extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <h1 className={styles.heading}>Public Resources</h1>
                </div>
                {/* <Row>
                    <Tabs style={{width:"100%"}}>
                        <TabPane tab="Videos" key="1">
                            <Videos />
                        </TabPane>
                        <TabPane tab="Articles" key="2">
                            Articles
                        </TabPane>
                    </Tabs>
                </Row> */}
            </div>
        )
    }
}

export default PublicResources;
