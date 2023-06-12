"use client";

import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";

const NavbarEndItem = () => {
  return (
    <div className="navbar-end">
      <Link href="https://www.linkedin.com/in/syubban/" target="blank">
        <LinkedinFilled className="text-neutral-content me-4 text-lg mb-0.5" />
      </Link>
      <Link href="https://github.com/HellBus1" target="blank">
        <GithubFilled className="text-neutral-content me-4 text-lg mb-0.5" />
      </Link>
    </div>
  );
};

export default NavbarEndItem;
