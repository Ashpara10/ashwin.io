"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React, { createContext, useState } from "react";
import { Provider } from "react-wrap-balancer";

export type Tcontext = {
  onEnter: () => void;
  onLeave: () => void;
  isInside: boolean;
};

export const Context = createContext<Tcontext | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInside, setIsInside] = useState(false);
  const onEnter = () => setIsInside(true);
  const onLeave = () => setIsInside(false);

  return (
    <Context.Provider
      value={{ onEnter: onEnter, onLeave: onLeave, isInside: isInside }}
    >
      {children}
    </Context.Provider>
  );
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ContextProvider>{children}</ContextProvider>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
