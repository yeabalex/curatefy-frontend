//import { useAuth } from '@lib/contex/t/auth-context';

import { NextImage } from "@/components/ui/next-image";
import { CustomIcon } from "@/components/ui/custom-icon";
import { Button } from "@/components/ui/button";
import { userURL } from "@/constants/url";
import Link from "next/link";

export function LoginMain(): JSX.Element {
  return (
    <main className="grid lg:grid-cols-[1fr,45vw]">
      <div className="relative hidden items-center justify-center  lg:flex">
        <NextImage
          imgClassName="object-cover"
          blurClassName="bg-accent-blue"
          src="/assets/twitter-banner.png"
          alt="Twitter banner"
          layout="fill"
          useSkeleton
        />
        <i className="absolute">
          <CustomIcon className="h-96 w-96 text-white" iconName="TwitterIcon" />
        </i>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-8 lg:items-start lg:justify-center h-[100vh]">
        <i className="mb-0 self-center lg:mb-10 lg:self-auto">
          <CustomIcon
            className="-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon"
            iconName="TwitterIcon"
          />
        </i>
        <div className="flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16">
          <h1
            className='text-3xl before:content-["See_what’s_happening_in_the_world_right_now."] 
                       lg:text-6xl lg:before:content-["Happening_now"]'
          />
          <h2 className="hidden text-xl lg:block lg:text-3xl">
            Join Twitter today.
          </h2>
        </div>
        <div className="flex max-w-xs flex-col gap-6 [&_button]:py-2">
          <div className="grid gap-3 font-bold">
            <Link
              href={`${userURL}/login`}
              className="flex justify-center md:justify-start"
            >
              <Button
                className="p-8 rounded-sm flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition
                         hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white
                         dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75 text-white dark:text-black"
              >
                <CustomIcon iconName="SpotifyIcon" /> Sign up with Spotify
              </Button>
            </Link>
            <p
              className="inner:custom-underline inner:custom-underline text-center text-xs
                         text-light-secondary inner:text-accent-blue dark:text-dark-secondary"
            >
              By signing up, you agree to the{" "}
              <a
                href="https://twitter.com/tos"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://twitter.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              , including{" "}
              <a
                href="https://help.twitter.com/rules-and-policies/twitter-cookies"
                target="_blank"
                rel="noreferrer"
              >
                Cookie Use
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
