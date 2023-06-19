"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  url: string;
  text: string;
}

const NavLink = (props: NavLinkProps) => {
  var pathName = usePathname();

  return (
    <li key={props.url}>
      <Link href={props.url} className={`text-base text-neutral-content ${(pathName === props.url) ? 'font-bold' : 'font-normal'}`}>
        {props.text}
      </Link>
    </li>
  );
};

export default NavLink;
