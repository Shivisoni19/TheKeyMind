import React from "react";
import { Link } from "react-router-dom";

const MicrosoftOfc2010Header = () => {
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
          <u> Microsoft Office </u>
        </Link>
        <span>
          <i>|</i>
        </span>
        <Link class="active" href="">
          <u> Microsoft Office 2010</u>
        </Link>
      </div>
    </div>
  );
};

export default MicrosoftOfc2010Header;
