import React from "react";
import { Link } from "react-router-dom";

// const defaultFoods = ["burrito", "salad", "pizza", "pasta"]

function Nav() {
  return (
      <ul>
        <li>
          <Link to={`/chowder-bowl`}>Show me chowder bowl!&nbsp;</Link>
        </li>
        <li>
          <Link to={`/mushroom-risotto`}>Show me mushroom risotto!&nbsp;</Link>
        </li>
        <li>
          <Link to={`/chardonnay`}>Show me chardonnay!&nbsp;</Link>
        </li>
      </ul>
  );
}

export default Nav;
