import { PageContainer } from '@ant-design/pro-components';
import { parse } from 'query-string';
import React from 'react';
import { history } from 'umi';

const TableDetail: React.FC<unknown> = () => {
  const query = parse(history.location.search);
  return (
    <PageContainer
      header={{
        title: '客户详情',
      }}
    >
      <div>页面参数:----{query.id}</div>
    </PageContainer>
  );
};

export default TableDetail;
