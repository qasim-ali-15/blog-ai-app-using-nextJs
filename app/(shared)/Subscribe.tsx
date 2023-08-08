import React from "react";

const Subscribe = () => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <div className="font-semibold text-base">Subscribe to our Newsletter</div>
      <div className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter email address to get top news and great deals
      </div>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter Email Address"
      />
      <button className="bg-accent-orange opacity-80 hover:opacity-100 hover:text-bold text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;
