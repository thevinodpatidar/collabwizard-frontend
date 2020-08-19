import React from 'react'
import { Layout } from 'antd'

const { Content} = Layout;

export default function Resources({children}) {
    return (
    <div style={{display:"flex"}}>
        <Layout style={{background:"#fff"}}>
          <Content>
              {children}
          </Content>
        </Layout>
    </div>
    )
}
