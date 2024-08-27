import React from "react";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-center font-bold py-2">20 % off on all deals</p>
      {children}
    </div>
  );
}
