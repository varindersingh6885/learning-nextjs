"use client";

import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { LabelledInput } from "./LabelledInput";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/actions/user";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignUp = async () => {
    const isUserCreated = await createUser(username, password);
    console.log("isUserCreated", isUserCreated);
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                label="Username"
                placeholder="varindersingh6885@gmail.com"
              />
              <LabelledInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type={"password"}
                placeholder="123456"
              />
              <button
                type="button"
                onClick={handleSignUp}
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign in
              </button>
              <div className="flex">
                <p>Already have an account?</p>
                <button
                  onClick={() => {
                    router.push("/signin");
                  }}
                  type="button"
                  className="ml-2 underline text-blue-600 cursor-pointer"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
