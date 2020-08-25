import React, { useEffect, useState } from 'react'
import { Table, Col, Row, Button, Form, Input, Popconfirm } from 'antd';
import { addCategoryAction, getCategoryAction, deleteCategoryAction } from '../actions/categoryActionTypes';
import { connect } from 'react-redux';
import { getToken } from '../../../../../utils/localStorage';


function Category(props) {
  const [form] = Form.useForm();
  const [categories,setCategories] = useState([]);
  const token = getToken("token");

  useEffect(() => {
    props.getCategory(token);
    // setCategories(props.categories);
    // console.log(categories)
  }, []);

  const handleSubmit = ()=>{
    let values = form.getFieldsValue();
    // console.log(values);
    props.addCategory(values,token);

  }

  const handleDelete = (key)=>{
    console.log("Delete:",key);
    props.deleteCategory(key,token)
  }

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
  ];
  
  const columns = [
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render : (text,record) => (
        props.categories.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={()=>handleDelete(record.id)}>
            <Button type="default" color="red">Delete</Button>
          </Popconfirm>
        ) : null
      )
    },
  ]

  console.log(props.categories);

  return (
    <div>
      <Row gutter={[16,16]} >
        <Form
          onFinish={handleSubmit}
          form={form}
          layout="inline"
          name="inline_form"
          >
            <Col xs={24} sm={24} md={14} lg={16} xl={18}>
            <Form.Item
              name="categoryName"
              label="Category Name"
              rules={[
                {
                  required: true,
                  message: 'Please input the category name!',
                },
              ]}
              >
              <Input />
            </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Form.Item>
              <Button htmlType="submit" type="primary">Add Category</Button>
            </Form.Item>
            </Col>
        </Form>
      </Row>
      {
        props.categories ?
        <Table dataSource={props.categories} key={props.categories.map((categoery,index)=>{
          return index
        })}  columns={columns} /> : null
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
      categories : state.categories.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  addCategory: (category,token) => {
      dispatch(addCategoryAction(category,token));
  },
  getCategory : (token) => {
    dispatch(getCategoryAction(token));
  },
  deleteCategory : (categoryId,token) =>{
    dispatch(deleteCategoryAction(categoryId,token));
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);
