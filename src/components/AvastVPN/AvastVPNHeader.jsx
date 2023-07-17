import React from "react";
import { Link } from "react-router-dom";

const AvastVPNHeader = () => {
  return (
    <div>
      <div class="lateralnav">
        <Link href="">
          <u> Home </u>
        </Link>
        <span>
          <i>|</i>
        </span>
        <Link class="active" href="">
          <u> VPN </u>
        </Link>
        <span>
          <i>|</i>
        </span>
        <Link class="active" href="">
          <u> Avast VPN</u>
        </Link>
      </div>
    </div>
  );
};

export default AvastVPNHeader;
