import React from "react";
import SectionTitle from "../../../hooks/SectionTitle";
import BerbieImg from "../../../assets/berbie/download (2).jpeg";

const Berbie = () => {
  return (
    <>
      <SectionTitle heading={"About Berbie"}></SectionTitle>

      <div className="max-w-prose mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={BerbieImg}
              alt=""
            />
          </div>
          <div className="p-8">
            <h2 className="uppercase tracking-wide text-3xl text-pink-600 font-semibold">
              About Our Best Berbie Feature
            </h2>
            <p className="mt-2 text-slate-500">
              I thought about my toys. Then I remembered the fun I used to have
              when I played toys with my brother. I told all my friends about
              the variety of toys and could spend hours imagining personalities,
              lives and families for them. My toys was my best friend, in a way.
              When I was sad, she was the one who comforted me. When I was
              happy, I was eager to tell her everything.
            </p>
          </div>
        </div>
      </div>
      {/*<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="" alt="">
    </div>
    <div className="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>*/}
    </>
  );
};

export default Berbie;

{
  /*h-48 w-full object-cover md:h-full md:w-48*/
}
