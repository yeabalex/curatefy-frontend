import { BsThreeDots } from "react-icons/bs";

type Props = {
  name: string;
  username: string;
  time: string;
};

const Heading = ({ name, username, time }: Props) => {
  return (
    <div className="flex gap-1 items-center">
      <h1 className="font-bold">{name}</h1>
      <h2 className="text-neutral-500 hidden mobile:block">@{username}</h2>
      <span className="text-neutral-500">•</span>
      <h2 className="text-neutral-500">
        {new Date(time).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h2>
      <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Heading;
