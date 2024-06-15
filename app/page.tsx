import FeedCard from "@/components/Feedcard";
import Image from "next/image";
import { BiBell, BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";

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
    icon: <BiBell />,
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
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        <div className="col-span-4"></div>
      </div>
    </div>
  );
}
