import React from "react";
import { Link } from "react-router-dom";

const AOMEIHeader = () => {
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
          <u> AOMEI </u>
        </Link>
      </div>
    </div>
  );
};

export default AOMEIHeader;
