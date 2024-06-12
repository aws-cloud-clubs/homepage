"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 bg-gradient-to-b from-black to-transparent h-16 z-50 text-white text-lg">
      <div className="max-w-screen-lg 2xl:max-w-screen-xl flex items-center justify-end px-8 mx-auto space-x-16 h-full">
        {pathname === "/" ? <button>소개</button> : <Link href="/">소개</Link>}
        <Link href="/blog">블로그</Link>
      </div>
    </nav>
  );
}
