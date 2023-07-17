import React from "react";
import { Link } from "react-router-dom";

const WindowsServerHeader = () => {
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
          <u>Microsoft Server </u>
        </Link>
        <span>
          <i>|</i>
        </span>
        <Link class="active" href="">
          <u>Microsoft Windows Server</u>
        </Link>
      </div>
    </div>
  );
};

export default WindowsServerHeader;
