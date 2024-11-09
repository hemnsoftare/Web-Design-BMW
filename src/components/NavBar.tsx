"use client";
import React from "react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import "./css/Navbar.css";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={`nav-item ${pathName === "/" ? "active" : ""}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`nav-item ${pathName === "/blog" ? "active" : ""}`}>
          <Link href="/blog?type=d">Blog</Link>
        </li>
        <li className={`nav-item ${pathName === "/schdule" ? "active" : ""}`}>
          <Link href="/schdule">Schedule</Link>
        </li>
        <li className="nav-item dropdown">
          <DropdownMenu>
            <DropdownMenuTrigger className="dropdown-trigger">
              <span>Layout Design</span>
              <IoMdArrowDropdown /> {/* icon */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Blog Page Layout</DropdownMenuLabel>
              {/* <DropdownMenuSeparator /> */}
              <hr />
              <DropdownMenuItem className="dropdown-item">
                <Link href={"/blog?type=float"}>
                  {" "}
                  Float layout with slide new
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="dropdown-item">
                <Link href={"/blog?type=flexbox"}>
                  {" "}
                  Flex box layout with slide new
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="dropdown-item">
                <Link href={"/blog?type=grid"}>
                  {" "}
                  Grid layout with slide new
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className={`nav-item ${pathName === "/signup" ? "active" : ""}`}>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li className={`nav-item ${pathName === "/signin" ? "active" : ""}`}>
          <Link href="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
