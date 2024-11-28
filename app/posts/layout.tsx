import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[1080px] self-center mx-6 px-5">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
