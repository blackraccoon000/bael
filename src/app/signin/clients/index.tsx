"use client";
import {signIn, signOut, useSession} from "next-auth/react";
import {useEffect} from "react";

export const SigninClient = () => {
  const {data: session} = useSession();

  useEffect(() => {
    console.log(session);
  }, []);

  return (
    <div>
      {session ? (
        <>
          <h1>{session.user?.name}さん、こんにちは</h1>
          <button onClick={() => signOut()}>signout</button>
        </>
      ) : (
        <>
          <h1>not signin</h1>
          <button onClick={() => signIn()}>signin</button>
        </>
      )}
    </div>
  );
};
