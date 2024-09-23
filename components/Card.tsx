import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="container w-3/5 bg-blue-950 flex justify-between rounded-lg">
      <div className=" flex flex-col gap-5 p-10 w-3/5">
        <h1 className="text-zinc-300 font-semibold text-2xl">
          Get <span className="text-purple-500">insights</span> that help your
          business grow.
        </h1>
        <p className="text-zinc-500">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className=" flex justify-between text-white md:flex-row">
          <h1 className="text-xl font-semibold flex flex-col">
            10K+<span className="text-zinc-500 text-xs">COMPANIES</span>
          </h1>
          <h1 className="text-xl font-semibold flex flex-col">
            314<span className="text-zinc-500 text-xs">TEMPLATES</span>
          </h1>
          <h1 className="text-xl font-semibold flex flex-col">
            12M+<span className="text-zinc-500 text-xs">QUERIES</span>
          </h1>
        </div>
      </div>
      <div className=" bg-purple-600 rounded-r-lg opacity-40">
        <Image
          src="/images/image-header-desktop.jpg"
          alt="image"
          width={400}
          height={400}
          className="rounded-r-lg float-end"
        />
      </div>
    </div>
  );
};

export default Card;
