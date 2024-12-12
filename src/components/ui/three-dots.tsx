import React, { ReactElement, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface MenuItemProps {
  label: string;
  icon?: ReactElement;
  onClick: () => void;
}

interface UserOptionsMenuProps {
  menuItems: MenuItemProps[];
}

const UserOptionsMenu: React.FC<UserOptionsMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="p-2 ml-auto rounded-full group cursor-pointer hover-transition">
          <BsThreeDots className="text-gray-500 group-hover:text-sky-500" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 shadow-lg border border-gray-200 bg-secondary rounded-md"
      >
        {menuItems.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onSelect={() => {
              item.onClick();
              setIsOpen(false);
            }}
            className="cursor-pointer px-3 py-2 hover:bg-secondary focus:bg-secondary flex items-center gap-2"
          >
            {item.icon}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserOptionsMenu;
