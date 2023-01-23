import Link from "next/link";
import React from "react";

const GreenBtn = ({ children, to }) => {
  return (
    <Link className="btn-contact" href={to}>
      {children}
    </Link>
  );
};

export default GreenBtn;
