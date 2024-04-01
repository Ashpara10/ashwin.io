"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import { Provider } from "react-wrap-balancer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
