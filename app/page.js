import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh] bg-purple-200 text-black ">
        <div className="h-full flex flex-col justify-center items-center gap-3">
          <p className="text-2xl font-bold">The Best URL Shortner</p>
          <p>The Straight Forword URL Shortner.......</p>
          <div className="flex gap-4">
            <Link href={"/shorten"}>
              {" "}
              <button className="bg-purple-300 rounded-lg p-3 py-1 text-black font-semibold text-sm shadow-lg">
                Try Now
              </button>{" "}
            </Link>
            <Link href={"/generate"}>
              {" "}
              <button className="bg-purple-300 rounded-lg p-3 py-1 text-black font-semibold text-sm shadow-lg">
                GitHub
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            fill={true}
            alt="vectore image"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
