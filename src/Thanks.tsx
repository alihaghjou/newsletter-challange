import Success from "./assets/images/icon-success.svg";
import React from "react";

const Thanks = ({
  email,
  setIsSubscriped,
}: {
  email: string;
  setIsSubscriped: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col md:w-2/5 p-10 justify-between rounded-lg w-full h-full md:h-max bg-white gap-6 m-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div className="mt-32 md:m-0">
        <img src={Success} className="mb-6" />
        <p className="font-normal">
          <h2 className="font-bold text-5xl text-[#242742] mb-4">
            Thanks for subscribing!
          </h2>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span> . Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>
      <button
        className="bg-[#242742] rounded-lg text-white py-4 hover:bg-[#ff6257] hover:shadow-lg"
        onClick={() => setIsSubscriped(true)}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Thanks;
