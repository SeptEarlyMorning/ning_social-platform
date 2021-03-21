import { Menu } from 'antd';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import navConfig from './config';

import styles from './index.module.scss';

interface ILeftProps {

}

const { Item } = Menu;

const Left: FC<ILeftProps> = () => {
  console.log('left');

  return (
    <div className={styles.left}>
      <Menu className={styles['left-nav']}>
        {
      navConfig.map((val) => {
        const {
          id, text, key,
        } = val;
        return (
          <Item className={styles['nav-container']} key={id}>
            <NavLink
              to={{
                search: `?filter=${key}`,
              }}
              isActive={(match, location) => {
                if (!match) return false;
                console.log(match, location);
                return true;
              }}
              className={styles.nav}
              activeClassName={styles.select}
              onClick={() => { console.log(key); }}
            >
              {text}
            </NavLink>
          </Item>
        );
      })
    }
      </Menu>
    </div>
  );
};

export default Left;
