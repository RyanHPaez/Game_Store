import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/games">
        Games
      </a>
      <a className="menu-item" href="/gameReview">
        Game Review
      </a>
      <a className="menu-item" href="/cart">
        Cart
      </a>
      <a className="menu-item" href="/deleteAccount">
        Delete Existing Account
      </a>
    </Menu>
  );
};
