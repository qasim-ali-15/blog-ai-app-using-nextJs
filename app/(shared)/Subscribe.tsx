import React from "react";

const Subscribe = () => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <div className="font-semibold text-base">Subscribe to our Newsletter</div>
      <div className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter email address to get top news and great deals
      </div>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2 focus:outline-none focus:border focus:border-accent-orange"
        placeholder="Enter Email Address"
      />
      <button className="bg-accent-orange opacity-100 hover:opacity-90 hover:font-bold text-white font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;
