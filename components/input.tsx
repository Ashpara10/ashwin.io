import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Send, SendHorizonal } from "lucide-react";
import { DefaultUser } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const Input = ({ user }: { user: DefaultUser }) => {
  const [msg, setMsg] = useState("");
  const addMessage = async (data: string, user: string) => {
    const chat = await addDoc(collection(db, "chat"), {
      user: user,
      data: data,
      createdAt: Date.now(),
    });
    setMsg("");

    document?.getElementById(`chat-${chat?.id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full max-w-2xl  flex flex-col  items-center justify-center gap-x-2  ">
      <div className="w-full flex mb-3  items-center justify-between">
        <div className="w-full px-1 mt-2 flex items-center justify-start gap-2">
          <Image
            width={40}
            height={40}
            src={user?.image as string}
            alt={user?.name as string}
            className="aspect-square rounded-xl"
          />
          <div className="flex flex-col  w-full">
            <span className="font-medium text-base md:text-lg">
              {user?.name}
            </span>
            <span className="text-sm opacity-80">{user?.email}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center mb-4">
        <div className="w-full flex rounded-xl items-center border   border-gray-300/70 dark:border-border justify-center gap-x-2 ">
          <input
            type="text"
            value={msg}
            className="w-full  px-3 py-2"
            onChange={(e) => setMsg(e?.target?.value)}
          />
          <button
            onClick={() => addMessage(msg, user?.name as string)}
            className="bg-black text-white dark:text-black font-medium dark:bg-white px-4 py-2 m-1 rounded-xl flex items-center justify-center "
          >
            Send
          </button>
        </div>
        <button
          className="underline underline-offset-2 opacity-80 px-2 py-1.5 rounded-lg flex items-center justify-center "
          onClick={() => signOut()}
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Input;
