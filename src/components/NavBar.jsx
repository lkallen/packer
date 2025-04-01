"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BsLuggage } from "react-icons/bs";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          {/* NAVBAR */}
          <div>
            <Link href="/">
              <div className="flex items-center gap-2  font-bold ">
                <div className="text-4xl ml-2 text-info">
                  <BsLuggage />
                </div>
                <div className="text-accent">
                  <div>Packer</div>
                  Hacker
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu bg-base-200  menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/user">Packing App</Link>
              </li>
              <li>
                <Link href="/admin">Mangage Lists</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/user"
                className={`${
                  pathname.includes("/user")
                    ? "btn btn-outline btn-accent"
                    : "btn btn-soft btn-accent text-white"
                }`}
              >
                Packing App
              </Link>
            </li>

            <li>
              <Link
                href="/admin"
                className={`${
                  pathname.includes("/admin")
                    ? "btn btn-outline btn-accent"
                    : "btn btn-soft btn-accent text-white"
                }`}
              >
                Mangage Lists
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
