import React, { useState } from 'react';
import {
    Form,
    Radio,
    Modal,
    Input,
    Upload,
    Button
  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadForm = ({visible,onCreate,onCancel}) =>{
  
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);

  const normFile = e => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };
  
  return (
    <Modal
      visible={visible}
      title="Upload new video"
      okText="Upload"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
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

        <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="video" action="/upload.do" listType="text">
          <Button disabled={disabled}>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
          name="link"
          label="Resource Link"
          rules={[
            {
              required: true,
              message: 'Please input the resource link!',
            },
          ]}
        >
        <Input disabled={!disabled}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UploadForm;