import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';
const NoFoundPage: React.FC<{}> = () => (
  <div className="not-found">
    <Result
      status="404"
      title="404"
      subTitle="对不起, 页面飞到宇宙了."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          返回首页
        </Button>
      }
    />
  </div>
);

export default NoFoundPage;
