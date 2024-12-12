import UserOptionsMenu from "@/components/ui/three-dots";
import Avatar from "@/components/ui/avatar";
import type { User } from "@/types/user.type";
import { FaPlus, FaMailBulk } from "react-icons/fa";
import { MenuItemProps } from "@/components/ui/three-dots";
import React, { ReactElement } from "react";

type Props = {
  user: User;
};

const UserRecommendation = ({ user }: Props) => {
  const menuItems: MenuItemProps[] = [
    {
      label: "Follow",
      icon: (<FaPlus className="w-4 h-4 text-gray-500" />) as ReactElement,
      onClick: follow,
    },
    {
      label: "Message",
      icon: (<FaMailBulk className="w-4 h-4 text-gray-500" />) as ReactElement,
      onClick: follow,
    },
  ];

  function follow() {}
  return (
    <div className="py-4 px-4 flex items-center justify-between cursor-pointer hover-transition">
      <div className="flex items-center space-x-3">
        <Avatar
          src={
            user.image
              ? user.image
              : "https://avatars.githubusercontent.com/u/21146643?s=400&u=8f4932274619bcbee8f811f9e1dde0f2c6290af3&v=4"
          }
          alt={`${user.displayName}'s profile`}
        />
        <div>
          <h3 className="font-bold text-base">{user.displayName}</h3>
          {(user.matchingArtists || user.matchingGenres) && (
            <span className="text-sm text-neutral-600 mt-1 block">
              Likes{" "}
              {`${user.matchingArtists?.join(", ")}${user.matchingGenres?.join(
                ", "
              )}`}
            </span>
          )}
        </div>
      </div>
      <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
        <UserOptionsMenu menuItems={menuItems} />
      </div>
    </div>
  );
};

export default UserRecommendation;
