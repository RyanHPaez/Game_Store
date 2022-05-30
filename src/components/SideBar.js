import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/item1">
        item1
      </a>
      <a className="menu-item" href="/item2">
        item2
      </a>
      <a className="menu-item" href="/item3">
        item3
      </a>
    </Menu>
  );
};