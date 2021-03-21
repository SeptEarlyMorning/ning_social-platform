import React, { FC } from 'react';
import {
  Avatar, Badge, Button, Input, Layout, Menu,
} from 'antd';
import { NavLink } from 'react-router-dom';
import { BellFilled } from '@ant-design/icons';
import navConfig from './config';

import styles from './index.module.scss';

interface IHeaderProps {
  className: string;
}

const { Header: AntdHeader } = Layout;
const { Item } = Menu;
const { Search } = Input;

const Header: FC<IHeaderProps> = ({ className }:IHeaderProps) => (
  <AntdHeader className={`${className} ${styles.header}`}>
    <div className={styles.container}>
      <div className={styles.logo}>缘起</div>
      <Menu className={styles.navs} theme="light" mode="horizontal">
        {
          navConfig.map((val) => {
            const {
              id, exact, text, to,
            } = val;
            return (
              <Item className={styles['nav-container']} key={id}>
                <NavLink
                  to={to}
                  exact={exact}
                  className={styles.nav}
                  activeClassName={styles.select}
                >
                  {text}
                </NavLink>
              </Item>
            );
          })
        }
      </Menu>
      <div className={styles.right}>
        <Search className={styles.search} />
        <Button type="primary">写文章</Button>
        <NavLink
          to="/news"
          activeClassName={styles.select}
        >
          <Badge dot count="2">
            <BellFilled className={styles.news} />
          </Badge>
        </NavLink>
        <Avatar className={styles.avatar} />
      </div>
    </div>
  </AntdHeader>
);

export default Header;
