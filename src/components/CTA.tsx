import coffeeTricksBanner004 from "../assets/images/coffe-tricks-banner-4.png";

export const CTA = () => {
  return (
    <div className="w-full h-auto mt-14 pb-16 flex flex-col items-center text-center">
      <button className="w-auto font-bold md:w-full lg:w-auto lg:px-5 lg:text-[2.7rem] md:text-[2.5rem] px-6 py-2 rounded-[1.3rem] md:rounded-[5rem] h-auto uppercase text-white bg-CTAButtonColor hover:bg-CTAButtonColorHover border-[2px] border-[#000000] border-opacity-[0.2]">
        Discover This Coffee Trick Now
      </button>

      <div className="w-full h-auto pt-4 pb-12 px-2 text-[1.125rem] bg-lightYellow mt-10 text-black">
        Finally the solution is HERE!
        <br /> A small team of researchers have finally cracked the code…
        <br /> …and discovered a simple, 30-second coffee trick that unlocks the
        FULL flab-busting power of caffeine!
        <br /> In fact, this incredible coffee trick…
      </div>

      <ul className="list-disc px-5 mt-10 text-[1.125rem]">
        <li>
          “Wakes up” a sleeping metabolism (so tolerance, toxins, and even age
          are not an issue)
        </li>
        <li>
          Supercharges the nutrients already in coffee (so ANY kind will work)
        </li>
        <li>
          Has already helped THOUSANDS of women achieve their ideal figure!
        </li>
      </ul>

      <p className="text-[1.125rem] mt-10">
        Best of all, it does NOT require any additional diet or exercise to
        work. There’s no need to swap out your favorite coffee either. Simply
        take 30 seconds a day to apply this “coffee trick” to your “cup of joe”
        and you’re all set!{" "}
      </p>
      <p className="text-[1.125rem] mt-8 mb-14">
        To find out how, please watch this important video on the next page!
      </p>

      <img src={coffeeTricksBanner004} alt="coffee tricks banner" />

      <h1 className="text-redColor font-bold text-[2rem] my-14">
        The team who discovered this life{" "}
        <span className="underline">life changing coffee</span> trick have asked
        that you please follow these guidelines:
      </h1>

      <ul className="text-[1.125rem]  list-disc mt-5 ">
        <li className="mb-4">
          The details of this presentation can be life-changing. Please pass it
          along to anyone who might benefit from it.
        </li>
        <li className="mb-4">
          Watch to the very end to discover everything about their
          scientifically-proven, all natural method. Also, do NOT abuse the
          information and advice they provide.
        </li>
        <li>
          ​This presentation is ONLY being made available to select number of
          people. The team behind this method is already facing pressure from
          corporate bullies and rival “health experts” and may be taken down at
          any time. If you are not interested in this powerful, transformational
          coffee trick, CLOSE THIS WINDOW NOW and free up your spot for the next
          visitor.
        </li>
      </ul>
      <button className="w-auto mt-8 font-bold md:w-full lg:w-auto lg:px-5 lg:text-[2.7rem] md:text-[2.5rem] px-6 py-2 rounded-[1.3rem] md:rounded-[5rem] h-auto uppercase text-white bg-CTAButtonColor hover:bg-CTAButtonColorHover border-[2px] border-[#000000] border-opacity-[0.2]">
        Discover This Coffee Trick Now
      </button>
    </div>
  );
};
