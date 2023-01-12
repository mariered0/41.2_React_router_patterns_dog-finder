import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/dogs">Home</Link>
        </li>
      </ul>
    </>
  );
}
// end

export default Nav;
