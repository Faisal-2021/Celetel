import Sidebar_Item from "../Components/Sidebar_Item";
import {
  HomeIcon,
  UsersIcon,
  WindowIcon,
  SwatchIcon,
  BellAlertIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

function SideBar() {
  return (
    <div className="">
      <div className=" mx-2 md:mx-7 my-3  ">
        <Image
          src="/Celetel_logo.svg"
          alt="Celetel Logo"
          width={150}
          height={50}
        />
      </div>
      <div>
        <ul>
          <li>
            <Sidebar_Item name="Home" Icon={HomeIcon} />
          </li>
          <li>
            <Sidebar_Item name="Matches" Icon={UsersIcon} />
          </li>
          <li>
            <Sidebar_Item name="Manage Sources" Icon={SwatchIcon} />
          </li>
          <li>
            <Sidebar_Item name="Integration" Icon={WindowIcon} />
          </li>
          <li>
            <Sidebar_Item name="Alerts" Icon={BellAlertIcon} />
          </li>
        </ul>
        <details className="py-4 px-5 text-gray-700 open:border-none border-b border-gray-200">
          <summary className="flex text-sm md:text-base items-center font-semibold px-3">
            <StarIcon className=" w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-5 fill-gray-700" />
            Settings{" "}
            <button className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-10 w-9 fill-gray-700"
              >
                <path d="m20 25-8.333-8.292h16.666Z" />
              </svg>
            </button>
          </summary>
          <ul>
            <li className=" border-b my-2 border-gray-200">User Settings</li>
            <li className=" border-b my-2 border-gray-200">IP</li>
            <li className=" border-b my-2 border-gray-200">Others</li>
          </ul>
        </details>
      </div>
    </div>
  );
}

export default SideBar;
