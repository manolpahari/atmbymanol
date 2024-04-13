"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = ({
  name,
  accountType,
}: {
  name: string | undefined;
  accountType: string | undefined;
}) => {
  const pathName = usePathname();
  const pathNames = pathName.split("/").filter((path) => path);
  pathNames.pop();
  const href = pathNames.toString().replace("", "/");
  console.log({ href });
  return (
    <>
      <nav>
        <Link href={href}>{"Go Back"}</Link>
      </nav>
      <div className="flex justify-between md:text-xl text-lg">
        <h1>Welcome: {name}</h1>
        <h1>Account: {accountType}</h1>
      </div>
    </>
  );
};

export default Header;
