import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { MyStore } from "../../Context/StoreContext";

export const UserRegister = () => {
  const { UserAccounts, setUserAccounts } = useContext(MyStore);

  let navigate = useNavigate();

  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  let RegisterUserAccount = () => {
    let NewUser = {
      Name: UserName,
      Email: UserEmail,
      Password: UserPassword,
    };

    setUserAccounts((users) => {
      let updateUser = [...users, NewUser];
      localStorage.setItem("AllUsers", JSON.stringify(updateUser));

      return updateUser;
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-4 font-inter">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Create Account
          </h2>
          <p className="text-xs text-white/70 mt-1">
            Sign up to get started with your portal
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            RegisterUserAccount();
            navigate("/login");
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-white/80">
              Full Name
            </label>
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
                console.log(e.target.value);
              }}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-all shadow-inner"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-white/80">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => {
                setUserEmail(e.target.value);
                console.log(e.target.value);
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
                console.log(e.target.value);
              }}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-all shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3.5 px-4 rounded-xl bg-white text-gray-950 font-bold text-sm hover:bg-white/90 active:scale-[0.98] transition-all shadow-lg cursor-pointer"
          >
            Sign Up
          </button>
          <p>
            <Link className="text-blue-50" to={"/login"}>
              Have a account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
