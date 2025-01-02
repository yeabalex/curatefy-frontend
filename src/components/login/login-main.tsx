//import { useAuth } from '@lib/contex/t/auth-context';
'use client'
import { NextImage } from "@/components/ui/next-image";
import { CustomIcon } from "@/components/ui/custom-icon";
import { Button } from "@/components/ui/button";
import { userURL } from "@/constants/url";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";


export function LoginMain(): JSX.Element {

const initiateSpotifyLogin = async () => {
  try {
     await axios.get("https://curatefy-backend-production.up.railway.app", {
      withCredentials: true, 
    });
  } catch (error) {
    console.error("Error initiating Spotify login:", error);
    alert("Something went wrong. Please try again.");
  }
};

useEffect(()=>{
  initiateSpotifyLogin()
},[])

  return (
    <main className="grid lg:grid-cols-[1fr,45vw]">
      <div className="relative hidden items-center justify-center  lg:flex">
        <NextImage
          imgClassName="object-cover"
          blurClassName="bg-accent-blue"
          src="https://images.unsplash.com/photo-1592306219952-2f08be424a67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Twitter banner"
          layout="fill"
          useSkeleton
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-8 lg:items-start lg:justify-center h-[100vh]">
        <div className="flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-8">
          <h1
            className='text-3xl before:content-["The_Social_Network_for_Spotify."] 
                       lg:text-6xl lg:before:content-["Happening_now"] text-center'
          />
          <h2 className="text-center md:text-start text-xl lg:block lg:text-3xl">
            Join Curatify today.
          </h2>
        </div>
        <div className="flex max-w-xs flex-col gap-6 [&_button]:py-2">
          <div className="grid gap-3 font-bold">
            <Link href={`${userURL}/login`}>
              <Button
                className="p-8 rounded-sm flex justify-center gap-2 border border-light-line-reply font-medium text-light-primary transition
          focus-visible:bg-[#e6e6e6] dark:border-0 
                         dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75 text-white dark:text-black bg-primary"
                         onClick={initiateSpotifyLogin}
              >
                <CustomIcon iconName="SpotifyIcon" /> Sign up with Spotify
              </Button>
              </Link>
            <p
              className="inner:custom-underline inner:custom-underline text-center text-xs
                         text-light-secondary inner:text-accent-blue dark:text-dark-secondary"
            >
              The spotify quota is limited{" "}
              <a
                href="https://twitter.com/tos"
                target="_blank"
                rel="noreferrer"
              >
              </a>{" "}
              Alternatively{" "}
              <a
                href="https://twitter.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                
              </a>
              , you can clone the repo and test it on your local machine{" "}
              <a
                href="https://help.twitter.com/rules-and-policies/twitter-cookies"
                target="_blank"
                rel="noreferrer"
              >
                Use you spotify client and secret key on the server
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
