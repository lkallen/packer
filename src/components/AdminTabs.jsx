"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminTabs() {
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
      <Link
        key={tag}
        href={`/admin/${tag}`}
        role="tab"
        className={`${pathname === `/admin/${tag}` ? "tab tab-active" : "tab"}`}
      >
        {editedTag}
      </Link>
    );
  });

  return (
    <div role="tablist" className="tabs tabs-lift">
      {tabsElements}
    </div>
  );
}
