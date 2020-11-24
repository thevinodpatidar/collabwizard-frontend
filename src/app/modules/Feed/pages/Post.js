import { Button, Card, Col, Row, Typography, Upload } from 'antd'
import React from 'react'
import { Input, message} from 'antd';
import { FileImageOutlined, UploadOutlined, VideoCameraAddOutlined } from '@ant-design/icons';

const { Text,Title } = Typography;
const { TextArea } = Input;

export default function Post() {

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <Card className="box-shadow" style={{width:400,position:"fixed",marginTop:"2rem",borderRadius:".3rem"}}>
            <Title level={3}>New Post</Title>
            <Row style={{flexDirection:"column"}} gutter={[24,24]}>
                <Col >
                    <TextArea placeholder="Write something you want to share" />

                </Col>
                <Col>
                    <Upload {...props}>
                        <Button icon={<FileImageOutlined size={32}/>}>Photo/Video</Button>
                    </Upload>
                </Col>
                <Col >
                    <Button type="primary">Create new post</Button>
                </Col>
            </Row>
        </Card>
    )
}
