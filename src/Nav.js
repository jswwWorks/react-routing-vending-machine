import React from "react";
import { Link } from "react-router-dom";


/** Nav
 *
 *  Props: none
 *
 *  States: none
 *
 *  Renders:
 *    VendingMachine -> Nav -> Link
 */
function Nav() {
  return (
      <ul>
        <p>
          <Link to={`/chowder-bowl`}>Show me chowder bowl!&nbsp;</Link>
        </p>
        <p>
          <Link to={`/mushroom-risotto`}>Show me mushroom risotto!&nbsp;</Link>
        </p>
        <p>
          <Link to={`/chardonnay`}>Show me chardonnay!&nbsp;</Link>
        </p>
      </ul>
  );
}

export default Nav;
