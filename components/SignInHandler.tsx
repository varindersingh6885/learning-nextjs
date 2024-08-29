"use client";
import { useRouter } from "next/navigation";

export const SignInHandler = () => {
  console.log("rendered on client side");

  const router = useRouter();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          console.log("handle sign in");
        }}
        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Sign in
      </button>

      <div className="flex">
        <p>Do not have an account?</p>
        <button
          onClick={() => {
            router.push("/signup");
          }}
          type="button"
          className="ml-2 underline text-blue-600 cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </>
  );
};
