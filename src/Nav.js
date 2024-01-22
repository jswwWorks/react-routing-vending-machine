import React from "react";
import { Link } from "react-router-dom";

// const defaultFoods = ["burrito", "salad", "pizza", "pasta"]

function Nav() {
  return (
      <ul>
        <li>
          <Link to={`/chowder-bowl`}>Show me chowder bowl!&nbsp;</Link>
          <Link to={`/mushroom-risotto`}>Show me mushroom risotto!&nbsp;</Link>
          <Link to={`/chardonnay`}>Show me chardonnay!&nbsp;</Link>
        </li>
      </ul>
  );
}

export default Nav;
