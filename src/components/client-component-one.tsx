"use client";

import { useState } from "react";
import { ServerComponentOne } from "./server-component-one";
// import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client component one</h1>
      {/* <ClientComponentTwo /> */}
      {/* <ServerComponentOne />  there will be an issue because we cannot use server component in client component, instead we can use it as a slot*/}
      {children}
    </>
  );
};
