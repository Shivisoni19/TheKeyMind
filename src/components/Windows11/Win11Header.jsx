import React from "react";
import { Link } from "react-router-dom";

const Win11Header = () => {
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
          <u> Operating Systems  </u>
        </Link>
        <span>
          <i>|</i>
        </span>
        <Link class="active" href="">
          <u> Windows 11  </u>
        </Link>
      </div>
    </div>
  );
};

export default Win11Header;
