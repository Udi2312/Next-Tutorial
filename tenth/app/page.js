// import Image from "next/image";
// import {usePathname} from "next/navigation";
"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div>
      This is home page blog is {searchParams.get("blog")} and utm source is {searchParams.get("utm_source")}
    </div>
  );
}
