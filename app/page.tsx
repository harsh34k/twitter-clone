"use client"
// import { useCurrentUser } from "@/hooks/user";
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Feedcard from "@/components/Feedcard";

interface TwiterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwiterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Bookbarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />
  }
]

export default function Home() {
  const queryClient = useQueryClient();
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error(`Google token not found`);

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );

      toast.success("Verified Success");
      console.log(verifyGoogleToken);

      if (verifyGoogleToken)
        window.localStorage.setItem("__twitter_token", verifyGoogleToken);

      // await queryClient.invalidateQueries(["curent-user"]);
    },
    [queryClient]
  );
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">

        <div className="col-span-3 pt-8">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer mt-2">
            <BsTwitter />
          </div>

          <div className="mt-4 text-2xl  ">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li key={item.title} className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer" >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#1d9bf0] mt-5 mr-3 w-full p-4  rounded-full hover:bg-sky-600 transition-all">
              Tweet
            </button>

          </div>

        </div>

        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-500">
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />

        </div>

        <div className="col-span-4">

          <GoogleLogin onSuccess={handleLoginWithGoogle
          } />
        </div>
      </div>
    </div>
  );
}
