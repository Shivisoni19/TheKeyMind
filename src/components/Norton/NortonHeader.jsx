import React from "react";
import { Link } from "react-router-dom";

const NortonHeader = () => {
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
          <u> Norton</u>
        </Link>
      </div>
    </div>
  );
};

export default NortonHeader;
