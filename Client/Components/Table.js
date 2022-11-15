import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function Table({ Data }) {
console.log(Data)
  return (
    <table className="table-auto shadow-md shadow-black w-3/6 sm:w-9/12 md:w10/12 lg:w-11/12 border-2 border-slate-400 border-spacing-4 mx-auto">
      <thead className="bg-white border-b-4 border-slate-100">
        <tr className=" text-center">
          <th className="text-sm md:font-medium text-gray-900 px-0.5 md:px-6 py-4 text-left">
            Username
          </th>
          <th className="text-sm md:font-medium text-gray-900 px-0.5 md:px-6 py-4 text-left">
            E-mail
          </th>
          <th className="text-sm md:font-medium text-gray-900 px-0.5 md:px-6 py-4 text-left">
            Phone-No
          </th>
          <th className="text-sm md:font-medium text-gray-900 px-0.5 md:px-6 py-4 text-left">
            Company
          </th>
          <th className="text-sm md:font-medium text-gray-900 px-0.5 md:px-6 py-4 text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody className=" border-collapse border-slate-500">
        {Data.map((data) => {
          {
            return (
              <tr key={data[1].email} className="h-8 md:h-12 border-b-2 odd:bg-white even:bg-slate-50">
                <td className="text-left px-0.5 md:px-6">{data[1].username}</td>
                <td className="text-left px-0.5 md:px-6">{data[1].email}</td>
                <td className="text-left px-0.5 md:px-6">{data[1].phone}</td>
                <td className="text-left px-0.5 md:px-6">{data[1].company}</td>
                <td className="flex justify-center mt-3 gap-1 md:gap-2">
                  <PencilIcon className="h-5 text-sky-500" />
                  <TrashIcon className="h-5 text-red-400" />
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default Table;
