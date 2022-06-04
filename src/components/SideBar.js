import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/games">
        games
      </a>
      <a className="menu-item" href="/gameReview">
        gameReview
      </a>
      <a className="menu-item" href="/cart">
        Cart
      </a>
    </Menu>
  );
};