"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoBugSharp } from "react-icons/io5";
import classNames from "classnames";
const NavBar = () => {
  const pathName = usePathname();
  console.log("🚀 ~ NavBar ~ pathName:", pathName);

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex border-b h-14 mb-5 space-x-6 items-center px-5">
      <Link href="/">
        <IoBugSharp />{" "}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            className={classNames({
              "text-zinc-900": pathName === link.href,
              "text-zinc-500": pathName !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
