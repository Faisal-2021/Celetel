function Sidebar_Item({ name, Icon }) {
  return (
    <div className="flex justify-left  group gap-2 text-gray-600 hover:bg-sky-500 px-2 py-3">
      <Icon className=" group-hover:fill-white h-4 md:h-6 inline-block" />
      <span className="group-hover:text-white text-sm md:text-base">{name} </span>
    </div>
  );
}

export default Sidebar_Item;
