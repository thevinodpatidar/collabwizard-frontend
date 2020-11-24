import { Card, Divider } from 'antd'
import React, { useState } from 'react'
import FeedCardTopHeader from './FeedsCardTopHeader';
import { EllipsisOutlined } from '@ant-design/icons';
import FeedCardBottom from './FeedsCardBottom';
import Feed from '../pages/Feed/Feed';

const { Meta } = Card;

export default function FeedsCard() {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };
    return (
        <div>
            <Card 
                hoverable
                title={<FeedCardTopHeader />}
                extra={<EllipsisOutlined size={36} />}
                style={{ width: 500,margin:"2rem"}}
                cover={<img onClick={showModal} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <div>
                    <span>FREE WEBINAR: Join our panel of experts on 3rd December at 16:00 GMT / 17:00 CET / 11am EST for an exclusive online panel discussion on YouGov’s Best Global Brands of 2020.</span>
                </div>
                {/* <Divider /> */}
                <div>
                    <FeedCardBottom />
                </div>
            </Card>
            <Feed visible={visible} confirmLoading={confirmLoading} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}
