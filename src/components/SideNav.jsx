"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const tags = [
    "clothing",
    "toiletries",
    "medications",
    "electronics",
    "critical",
    "miscellaneous",
  ];

  const tabsElements = tags.map((tag) => {
    const firstLetter = tag.charAt(0).toUpperCase();
    const remainingLetters = tag.slice(1);
    const editedTag = firstLetter + remainingLetters;

    return (
      <li key={tag}>
        <Link
          href={`/user/${tag}`}
          className={`${pathname === `/user/${tag}` ? "menu-active" : ""}`}
        >
          {editedTag}
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className="menu bg-base-200 w-56">{tabsElements}</ul>
    </>
  );
}
