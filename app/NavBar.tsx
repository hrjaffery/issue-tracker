import Link from "next/link";
import React from "react";
import { IoBugSharp } from "react-icons/io5";

const NavBar = () => {
  const links = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex border-b h-10 space-x-4 items-center">
      <Link href="/">
        <IoBugSharp />{" "}
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li className="hover:text-zinc-700 transition-colors" key={link.href}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
