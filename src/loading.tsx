
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const LoadingPage: React.FC<{}> = () => (
  <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <Spin indicator={antIcon} />
  </div>
);

export default LoadingPage;
