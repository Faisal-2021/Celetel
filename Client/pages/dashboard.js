import { useState, useEffect } from "react";
import SideBar from "../Components/SideBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Bars3BottomRightIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Table from "../Components/Table";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectAllUsers } from "../Slices/getUser";


function Dashboard() {

  const users = useSelector(selectAllUsers);
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const AddUser = () => {
    router.push("./AddUser");
  };


  return (
    <div className="flex">
      <div className=" h-screen basis-1/6 md:basis-1/5">
        <SideBar />
      </div>

      <div className=" bg-gray-100 w-screen h-screen basis-5/6  md:basis-4/5">
        <main className=" my-2 ">
          <div className="flex items-center gap-1 md:gap-2 my-2">
            <span className="flex w-full flex-shrink mx-2 md:mx-3 lg:mx-5 px-5 bg-white rounded-xl my-3 md:my-5">
              <MagnifyingGlassIcon className=" w-6 md:w-10 text-gray-500 " />
              <input
                type="search"
                placeholder="Search"
                className=" outline-none px-3 h-14 w-full flex flex-grow"
              />
            </span>
            <BellIcon className=" w-10 h-10 text-gray-600" />
            <div className=" bg-sky-500 text-center font-semibold text-xl md:text-2xl text-white w-12 h-8 md:w-12 md:h-10 rounded-full mr-2">
              A
            </div>
          </div>
          <p className=" ml-2 md:ml-3 lg:ml-4 font-semibold md:font-bold text-2xl md:text-3xl lg:text-4xl">
            Customer Details
          </p>
          <div className=" flex mx-1 md:mx-3 lg:mx-9 my-3 justify-between px-0 md:px-2">
            <p className=" font-medium text-sm sm:text-base">
              The terms you are tracking
            </p>
            <div className=" flex gap-1 flex-row ">
              <button className="md:px-5 md:py-1 px-2 py-0.5 border border-gray-500 text-gray-500 rounded md:font-medium flex">
                {" "}
                <Bars3BottomRightIcon className="h-4 w-4 mt-1" />
                Filter
              </button>
              <button
                onClick={AddUser}
                className=" bg-orange-600 md:px-5 md:py-1 px-2 py-0.5 text-white rounded md:font-medium"
              >
                {" "}
                + Add
              </button>
            </div>
          </div>

          <Table Data={Object.entries(users)} />
        </main>

        <div className=" flex justify-end">
          <ChevronLeftIcon className=" h-8 md:h-12 text-gray-700 hover:text-orange-400" />
          <span className=" text-2xl md:text-4xl text-gray-700">1</span>
          <ChevronRightIcon className=" h-8 md:h-12 text-gray-700 hover:text-orange-400" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
