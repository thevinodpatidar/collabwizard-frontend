
import React, { useState } from 'react';
import { Upload, Button, message,Modal,Form, Input, Radio, Select, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getToken } from '../../../../../utils/localStorage';
import { baseUploadURL } from '../../../../../api/baseurl';

const { Option } = Select;

const UploadForm = (props) =>{
  
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  const [uploading,setUploading] = useState(false);
  const [category,setCategory] = useState("");
  const token = getToken("token");

  const handleUpload = (values) => {
    if(props.isVideo) values.resourceType = 'videos'
    else values.resourceType = 'articles'
    props.onUpload({values},token);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
    setCategory(value);
}

  const formProps = {
    name: 'file',
    action: baseUploadURL,
    headers: {
      authorization: 'Bearer '+token,
      "Access-Control-Allow-Origin" : "*"
    },
    // beforeUpload: file => {
    //   if (file.type !== 'video/mp4') {
    //     message.error(`${file.name} is not a video file`);
    //   }
    //   return file.type === 'image/jpeg';
    // },
    onChange(info) {
      if (info.file.status === 'uploading') {
        setUploading(true)
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        if(info.file.response.status === true){
          console.log(info);
          form.setFieldsValue({resourceLink : info.file.response.image})
        }
        setUploading(false);
      } else if (info.file.status === 'error') {
        console.log(info);
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
            props.onCreate()
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
  }

  return (
    <Modal
      visible={props.visible}
      title="Upload new video"
      okText="Upload"
      cancelText="Cancel"
      onCancel={props.onCancel}
      onOk={handleSubmit}
      footer={[
        <Button key="back" onClick={()=>{form.resetFields()}}>
            Reset
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
          isPublic : "false"
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
        <Row >
          <Form.Item name="resourceSubType" label="Resource Subtype" >
            <Radio.Group>
              <Radio value="upload" onClick={()=>{setDisabled(false)}}>Upload</Radio>
              <Radio value="link" onClick={()=>{setDisabled(true)}} >Link</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="isPublic" label="Resource Visibility" style={{paddingLeft:"4rem"}}>
            <Radio.Group>
              <Radio value="false" >Private</Radio>
              <Radio value="true" >Public</Radio>
            </Radio.Group>
          </Form.Item>
        </Row>
        <Form.Item name="category" label="Category" 
        rules={[
          {
            required: true,
            message: 'Please input the category!',
          },
        ]} >
        <Select
            // showSearch
            style={{ width: 200 }}
            placeholder="Select a category"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                props.categories ? 
                props.categories.map((category,index)=> (
                    <Option key={index} value={category.categoryName}>{category.categoryName}</Option>
                ))
                : <Option value="">No Category</Option>
            }
        </Select>
        </Form.Item>
        <Form.Item >
          <Upload {...formProps}>
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

export default UploadForm;