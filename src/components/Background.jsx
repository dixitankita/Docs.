import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center font-semibold  text-zinc-600 text-xl">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] text-[16vw]  leading-none tracking-tight text-zinc-900 font-bold ">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
