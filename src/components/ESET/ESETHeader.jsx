import React from "react";
import { Link } from "react-router-dom";

const ESETHeader = () => {
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
          <u> Antivirus </u>
        </Link>
        <span>
          <i>|</i>
        </span>
        <Link class="active" href="">
          <u> ESET</u>
        </Link>
      </div>
    </div>
  );
};

export default ESETHeader;
