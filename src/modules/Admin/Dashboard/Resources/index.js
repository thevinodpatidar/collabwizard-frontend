import React from 'react'
import { Layout } from 'antd'

const { Content} = Layout;

export default function Resources({children}) {
    return (
    <div style={{margin:"3rem",display:"flex"}}>
        <Layout style={{background:"#fff"}}>
          <Content>
              {children}
          </Content>
        </Layout>
    </div>
    )
}
