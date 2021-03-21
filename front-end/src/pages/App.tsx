import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import { routers } from '../routers';

const { Content } = Layout;

const App = () => (
  <Layout className="section">
    <Header className="header" />
    <Content className="main">
      <div className="content-container">
        <Switch>
          {
            routers.map(({
              id, path, exact, render,
            }) => <Route key={id} path={path} exact={exact} render={render} />)
          }
        </Switch>
      </div>
    </Content>
  </Layout>
);

export default App;
