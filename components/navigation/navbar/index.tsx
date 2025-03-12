import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between gap-5 background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:!shadow-none sm:px-12">
      <Link href={"/"} className="flex items-center gap-1">
        <Image src={"images/site-logo.svg"} width={23} height={23} alt="DevOverFlow Logo" />
        <p className="h2-bold font-space-grotesk text-dark100_light900 max-sm:hidden">
          Dev <span className="text-primary-500">OverFlow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
