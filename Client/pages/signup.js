import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.password.value === e.target.confirmPassword.value) {
      router.push("/");
    } else {
      alert("Password and ConfirmPassword are not matched ");
    }
  }

  return (
    <div className="flex flex-col justify-center h-screen bg-slate-50">
      <div className=" ">
        <p className=" text-center pb-5 text-3xl font-sans font-bold text-sky-500">
          Sign Up
        </p>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col  mx-auto w-3/6 md:w-5/12 lg:w-1/4 gap-3"
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            minLength="5"
            maxLength="30"
            className="border focus:invalid:bg-red-100 h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            minLength="8"
            className="border focus:invalid:bg-red-100 h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
          />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            minLength="8"
            maxLength="15"
            onPaste={(e)=>e.preventDefault()}
            className="border focus:invalid:bg-red-100 h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
          />
          <input
            type="password"
            required
            name="confirmPassword"
            minLength="8"
            maxLength="15"
            onPaste={(e)=>e.preventDefault()}
            placeholder="Confirm Password"
            className="border h-9 focus:invalid:bg-red-100 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
          />
          <input
            type="submit"
            value="Sign up"
            className="h-9 text-white hover:text-sky-500 font-semibold uppercase rounded-full shadow-md hover:bg-white focus:ring-1 hover:ring-sky-500 bg-sky-500 hover:border-2 hover:border-sky-500 outline-none"
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
