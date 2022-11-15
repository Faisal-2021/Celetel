import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectAllUsers } from "../Slices/getUser";



function AddUser() {
  const router = useRouter();
  const dispatch = useDispatch()

  const [username,setUsername] = useState('')
  const [email,setEmail] =useState('')
  const [phone,setPhone] = useState('')
  const [company,setCompanyname] = useState('')

  const handleAddUser = async () => {

    await dispatch(addUser({ username,email,phone,company })).unwrap()
    setUsername('')
    setEmail('')
    setPhone('')
    setCompanyname('')
    router.push("/dashboard");
  };




  return (
    <div className="flex flex-col justify-center h-screen bg-slate-50">
      <p className=" text-center pb-5 text-3xl font-sans font-bold text-sky-500">
        Add User
      </p>
      <form
        className=" flex flex-col  mx-auto w-3/6 md:w-5/12 lg:w-1/4 gap-3"
      >
        <input
          type="text"
          required
          placeholder="Username"
          name="Username"
          minLength="5"
          maxLength="30"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="border focus:invalid:bg-red-100 h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          minLength="8"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="border focus:invalid:bg-red-100 h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          name="phone"
          minLength="10"
          maxLength="10"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          className="border focus:invalid:bg-red-100 h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
        />
        <input
          type="text"
          required
          name="Company"
          value={company}
          onChange={(e)=>setCompanyname(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          placeholder="Company Name"
          className="border h-9 focus:invalid:bg-red-100 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
        />
        <button
          onClick={handleAddUser}
          className="h-9 text-white hover:text-sky-500 font-semibold uppercase rounded-full shadow-md hover:bg-white focus:ring-1 hover:ring-sky-500 bg-sky-500 hover:border-2 hover:border-sky-500 outline-none"
          >Add</button>
      </form>
    </div>
  );
}

export default AddUser;
