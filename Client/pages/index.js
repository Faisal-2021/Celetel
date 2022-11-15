import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-slate-50">
      <div className=" ">
        <p className=" text-center pb-5 text-3xl font-sans font-bold text-sky-500">
          Login
        </p>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col  mx-auto w-3/6 md:w-5/12 lg:w-1/4 gap-5"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            minLength="8"
            onPaste={(e)=>e.preventDefault()}
            className="border h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            minLength="8"
            maxLength="15"
            onPaste={(e)=>e.preventDefault()}
            className="border h-9 rounded-md text-sm shadow-sm bg-white focus:ring-1 focus:ring-sky-500 placeholder-slate-400 px-2 focus:border-sky-500 focus:border outline-none"
          />
          <input
            type="submit"
            value="Login"
            className="h-9 text-white hover:text-sky-500 font-semibold uppercase rounded-full shadow-md hover:bg-white focus:ring-1 hover:ring-sky-500 bg-sky-500 hover:border-2 hover:border-sky-500 outline-none"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
