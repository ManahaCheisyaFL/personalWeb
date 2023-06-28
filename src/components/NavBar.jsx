import React, { useState } from "react";

const NavBar = () => {

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="https://rahulkarda.netlify.app">Rahul</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">CFLM</h1>
      </div>
    </div>
  );
};

export default NavBar;
