import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/icons/hamburger.svg"}
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none p-6">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href={ROUTES.HOME} className="flex items-center gap-1">
          <Image src={"/images/site-logo.svg"} width={23} height={23} alt="Logo" />
          <p className="h2-bold font-space-grotesk text-dark100_light900">
            Dev <span className="text-primary-500">OverFlow</span>
          </p>
        </Link>
        <div className="flex no-scrollbar h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex flex-col h-full gap-6 pt-16 pb-10">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3 px-1">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium btn-teritiary background-light700_dark300 text-dark400_light900 min-h-[41px] light-border-2 w-full rounded-lg border px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
