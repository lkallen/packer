"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminTabs() {
  const pathname = usePathname();

  const tags = [
    "guest",
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
      <li key={tag} className="mb-1">
        <Link
          href={`/admin/${tag}`}
          className={`${
            pathname === `/admin/${tag}`
              ? "btn btn-outline btn-info text-accent hover:text-white"
              : "btn btn-soft btn-accent text-white "
          }`}
        >
          {editedTag}
        </Link>
      </li>
    );
  });

  return <ul className="menu w-56">{tabsElements}</ul>;
}
