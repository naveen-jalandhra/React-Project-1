import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router";
import { MyStore } from "../../Context/StoreContext";
import { Product } from "../../Pages/Product";

export const UserLogin = () => {
  const {
    // LoginDetail,
    // setLoginDetail,
    LoginCheckup,
  } = useContext(MyStore);

  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  let LoginInfo = {
    Email: UserEmail,
    Password: UserPassword,
  };

  let logginFnc = () => {
    LoginCheckup(LoginInfo);
  };

  return (
    <div className="min-h-screen flex w-full h-full items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-4 font-inter">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Glossy Portal
          </h2>
          <p className="text-xs text-white/70 mt-1">
            Enter your credentials to continue
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            logginFnc();
            <Navigate to={"/Products"} />;
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-white/80">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-all shadow-inner"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-white/80">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-all shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3.5 px-4 rounded-xl bg-white text-gray-950 font-bold text-sm hover:bg-white/90 active:scale-[0.98] transition-all shadow-lg cursor-pointer"
          >
            Sign In
          </button>
          <p>
            <Link className="text-blue-50" to={"/register"}>
              Create a account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
