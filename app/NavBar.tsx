import Link from "next/link";
import React from "react";
import { IoBugSharp } from "react-icons/io5";

const NavBar = () => {
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
            className=" text-zinc-500 hover:text-zinc-800 transition-colors"
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
