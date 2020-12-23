import React, { FC } from 'react';
import {Layout} from 'antd';

const styles = require('./index.less');

interface IHeaderProps {

};

const {Header: AntdHeader} = Layout;

const Header: FC<IHeaderProps> = props => {
  return (
    <AntdHeader >
      <div className={styles['header']}>
      </div>
    </AntdHeader>
  );
}

export default Header;