"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClasses =
    "background-dark400_light900 body-medium text-dark300_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Sign In Failed", {
        description: error instanceof Error ? error.message : "An error occured during sign-in",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className={buttonClasses}
        onClick={() => {
          handleSignIn("github");
        }}
      >
        <Image
          src={"/icons/github.svg"}
          alt="github-log0"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button
        className={buttonClasses}
        onClick={() => {
          handleSignIn("google");
        }}
      >
        <Image src={"/icons/google.svg"} alt="google-logo" width={20} height={20} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
