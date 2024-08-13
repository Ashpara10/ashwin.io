"use client";
import Input from "@/components/input";
import { db } from "@/lib/firebase";
import { DefaultUser, Session, getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const q = query(collection(db, "chat"));

const getUserSession = async () => {
  const res = await fetch("/api/auth/session");
  const resp = await res?.json();
  return resp;
};

const Page = () => {
  const [user, setUser] = useState<Session | null>(null);
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState<QuerySnapshot<DocumentData, DocumentData>>();
  useEffect(() => {
    const getData = async () => {
      const data = await getUserSession();
      setUser(data?.session);
    };
    onSnapshot(q, (querySnapshot) => {
      setChat(querySnapshot);
    });

    getData();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <h2 className="w-full max-w-2xl mb-2 text-left text-2xl font-medium md:text-4xl md:font-semibold">
        Guestbook 🌱
      </h2>
      {!user?.user && (
        <>
          <div className="w-full max-w-2xl flex flex-col items-start justify-center gap-2 mb-4">
            <span className="opacity-90 flex flex-wrap max-w-md">
              Authenticate with your Google or Github account to leave a message
              int the guestbook{" "}
              <button
                onClick={() => {
                  signIn("google");
                }}
                className="underline flex items-center justify-center gap-2 underline-offset-2 opacity-80 mt-2 "
              >
                {" "}
                SignIn with Google
              </button>
              <button
                onClick={() => {
                  signIn("github");
                }}
                className="underline ml-4 flex items-center justify-center gap-2 underline-offset-2 opacity-80 mt-2 "
              >
                {" "}
                SignIn with Github
              </button>
            </span>
          </div>
        </>
      )}
      {user?.user && <Input user={user?.user as DefaultUser} />}

      <div className="max-w-2xl mt-2 w-full flex flex-col gap-y-1 ">
        {chat?.docs
          ?.sort((a, b) => a?.data()?.createdAt - b?.data().createdAt)
          ?.map((c, i) => {
            const { user, data } = c?.data();
            return (
              <div
                key={i}
                id={`chat-${c?.id}`}
                className={`w-full flex gap-x-1   `}
              >
                <span className="w-full flex-wrap">
                  <span className="opacity-80">{user}</span>: {data}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Page;
