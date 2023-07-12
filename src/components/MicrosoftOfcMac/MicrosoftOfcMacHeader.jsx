import React from "react";
import { Link } from "react-router-dom";

const MicrosoftOfcMacHeader = () => {
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
          <u> Office for MAC</u>
        </Link>
      </div>
    </div>
  );
};

export default MicrosoftOfcMacHeader;
