"use client";

import {
  GithubFilled,
  LinkedinFilled,
  MediumSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  const links = ["/", "/blog", "/project", "/about"];

  const renderLink = (link: string) => {
    const linkText =
      link === "/"
        ? "Home"
        : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);

    return (
      <Link
        key={link}
        href={link}
        className={`text-neutral-content font-medium link link-hover`}
      >
        {linkText}
      </Link>
    );
  };

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        {links.map((link) => renderLink(link))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href={""}>
            <TwitterSquareFilled className="text-3xl" />
          </Link>
          <Link href={"https://medium.com/@syubbanfakhriya"}>
            <MediumSquareFilled className="text-3xl" />
          </Link>
          <Link href={"https://www.linkedin.com/in/syubban/"}>
            <LinkedinFilled className="text-3xl" />
          </Link>
          <Link href={"https://github.com/HellBus1"}>
            <GithubFilled className="text-3xl" />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Syubban Fakhriya</p>
      </div>
    </footer>
  );
};

export default Footer;
