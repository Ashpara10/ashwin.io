"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { Provider } from "react-wrap-balancer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
