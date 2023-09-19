import { Avatar, Dropdown, Layout, MenuProps, } from 'antd';
import React from 'react';
import './index.less';
import { LoginOutlined } from '@ant-design/icons';

const {  Header } = Layout;


const PageHeader: React.FC = () => {

  // 退出登录
  const loginOut = () => { 

  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={loginOut}>
          <LoginOutlined style={{marginRight:5}} />
          退出登录
        </div>
      ),
    },
  
  ]

  return (
    <Header className="header">
      <Dropdown arrow menu={{ items }}>
        <Avatar style={{ backgroundColor: '#f56a00',cursor:'pointer' }}>向</Avatar>
      </Dropdown>
      
    </Header>
  );
};

export default PageHeader;
