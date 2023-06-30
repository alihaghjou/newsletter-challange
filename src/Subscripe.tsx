import Image from "./assets/images/illustration-sign-up-desktop.svg";
import List from "./assets/images/icon-list.svg";
import { useState } from "react";

function isEmail(email: string) {
  if (email.includes("@")) return true
  return false
}

const Subscripe = ({
  email,
  setEmail,
  setIsSubscriped,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setIsSubscriped: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState(false)
  function onSubscripe() {
    if (isEmail(email)) setIsSubscriped(false)
    setError(true)
  }
  return (
    <main className="flex md:flex-row flex-col-reverse justify-center items-center md:w-max w-full rounded-lg bg-white gap-8 md:p-8 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <section className="flex flex-col gap-4 p-4">
        <h2 className="md:text-7xl text-3xl font-bold text-[#242742]">
          Stay updated!
        </h2>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={List} />
            Product discovery and building what matters
          </li>
          <li>
            <img src={List} />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src={List} />
            And much more!
          </li>
        </ul>
        <div className="flex flex-col  mt-3">
          <div className="flex justify-between">
          <label htmlFor="newsletter">Email address</label>
          {error && <span className="text-[#ff6257]">Valid email required</span>}
          </div>
          <input
            placeholder="email@company.com"
            required
            className={error ? "bg-[#ebe8e8] text-[#ff6257] outline-none border-none ring-1 ring-[#ff6257] input" : "input "}
            id="newsletter"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-[#242742] text-white w-full rounded-lg py-4 px-6 hover:bg-gradient-to-r hover:from-[#ff6257] hover:from-brightness-75 hover:to-[#ff6257] hover:to-brightness-0 hover:shadow-lg"
          onClick={onSubscripe}
        >
          Subscribe to monthly newsletter
        </button>
      </section>
      <img src={Image} alt="pic" className="md:ml-4" />
    </main>
  );
};

export default Subscripe;
