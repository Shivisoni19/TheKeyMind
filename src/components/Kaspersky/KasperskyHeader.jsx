import React from "react";
import { Link } from "react-router-dom";

const KasperskyHeader = () => {
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
          <u> Kaspersky</u>
        </Link>
      </div>
    </div>
  );
};

export default KasperskyHeader;
