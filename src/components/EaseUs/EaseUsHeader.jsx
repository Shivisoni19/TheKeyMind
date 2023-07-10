import React from "react";
import { Link } from "react-router-dom";

const EaseUsHeader = () => {
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
          <u> Backup and Recovery  </u>
        </Link>
        <span>
          <i>|</i>
        </span>
        <Link class="active" href="">
          <u> EaseUs  </u>
        </Link>
      </div>
    </div>
  );
};

export default EaseUsHeader;
