"use client";

import apiClient from "@/libs/apiClient";
import {useEffect, useState} from "react";

const AppClient = () => {
  // return <SigninClient />;
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    apiClient.goodbye.$get().then((res) => {
      setGreeting(res.hello);
    });
  }, []);

  return (
    <>
      <h1>Root</h1>
      <p>a: {greeting}</p>
    </>
  );
};

export default AppClient;
