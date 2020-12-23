import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';

import './App.less';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header></Header>
      <Content />
    </Layout>
  );
}

export default App;