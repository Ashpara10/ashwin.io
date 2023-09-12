import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      suppressHydrationWarning
      className="px-4 w-full flex items-start justify-center min-h-screen my-16"
    >
      {children}
    </div>
  );
};

export default Layout;
