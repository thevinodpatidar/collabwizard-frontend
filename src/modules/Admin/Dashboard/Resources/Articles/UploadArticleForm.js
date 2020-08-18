
import React, { useState } from 'react';
import { Upload, Button, message,Modal,Form, Input, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getToken } from '../../../../../utils/localStorage';

const ArticleUploadForm = ({visible,onCreate,onCancel,parentProps}) =>{
  
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  const [uploading,setUploading] = useState(false);
  const token = getToken("token");

  const handleUpload = (values) => {
    values.resourceCategory  = "private";
    values.resourceType = "articles";
    parentProps.onUpload({values},token);
  };
  
  const props = {
    name: 'file',
    action: 'http://localhost:4000/api/upload/file',
    headers: {
      authorization: 'Bearer '+token,
    },
    beforeUpload: file => {
        if (file.type !== 'image/jpg' || file.type !== 'image/jpeg') {
          message.error(`${file.name} is not a jpeg file`);
        }
        return file.type === 'image/jpeg';
    },
    onChange(info) {
      if (info.file.status === 'uploading') {
        setUploading(true)
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        if(info.file.response.status === true){
          form.setFieldsValue({resourceLink : info.file.response.image})
        }
        setUploading(false);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const handleSubmit = () => {
    form.validateFields()
          .then(values => {
            form.resetFields();
            handleUpload(values)
            onCreate()
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
  }
  return (
    <Modal
      visible={visible}
      title="Upload new video"
      okText="Upload"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleSubmit}
      footer={[
        <Button key="back" onClick={onCancel}>
            Cancel
        </Button>,
        <Button key="submit" type="primary" loading={uploading} onClick={handleSubmit}>
              Submit
        </Button>,
      ]}
    >
      <Form
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          resourceSubType: 'upload',
        }}
      >
        <Form.Item
          name="resourceName"
          label="Resource Name"
          rules={[
            {
              required: true,
              message: 'Please input the resource name!',
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item name="resourceSubType" label="Resource Subtype" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="upload" onClick={()=>{setDisabled(false)}}>Upload</Radio>
            <Radio value="link" onClick={()=>{setDisabled(true)}} >Link</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item >
          <Upload {...props}>
            <Button disabled={disabled}>
              <UploadOutlined /> Select File
            </Button>
          </Upload>
        </Form.Item>
      <Form.Item
          name="resourceLink"
          label="Resource Link"
          rules={[
            {
              required: true,
              message: 'Please choose resource file or input resource link!',
            },
          ]}
        >
        <Input disabled={!disabled}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ArticleUploadForm;