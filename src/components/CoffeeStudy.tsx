import { CTA } from "./CTA";

export const CoffeeStudy = () => {
  return (
    <section className="w-full  h-auto flex flex-col items-center mt-5">
      <article className="coffeeStudyBg w-full md:w-[85%] lg:w-[63%] h-auto text-black text-[1.125rem] text-center pt-11 px-8 md:px-[3rem]">
        <p>
          A recent review of{" "}
          <span className="font-bold">21 published studies</span> shows that
          caffeine has a{" "}
          <span className="font-bold">
            positive effect on the body’s metabolism…
          </span>{" "}
          And yet, most regular coffee drinkers aren’t magically losing weight
          the way they might hope. So what’s going on? Well, it all comes down
          to the 3 coffee killers that cancel out or even REVERSE the
          fat-burning effects of coffee…
        </p>

        <div className="w-full py-7">
          <h4 className="underline font-semibold">
            Coffee Killer #1: Tolerance
          </h4>
          <p>
            As with any substance, the body grows more tolerant to caffeine
            through repeated use. Basically, the more coffee you drink, the less
            of an effect it has. This includes everything from mental
            stimulation to the metabolism boost mentioned above… So the key is
            to find a way to KEEP that metabolism boost long-term…
          </p>
        </div>
        <div className="w-full py-7">
          <h4 className="underline font-semibold">
            Coffee Killer #2: Low Quality
          </h4>
          <p>
            According to the Harvard School of Health, coffee is an excellent
            source of antioxidants, which help fight the effects of aging and
            support a{" "}
            <span className="font-semibold">young, FAST metabolism!</span>{" "}
            However, most coffee brands (including expensive “organic” or
            “premium” brands) use such low quality beans that each cup provides
            only a tiny trickle of antioxidants. If only there was a way to
            RECLAIM those lost nutrients with the coffee we already drink…
          </p>
        </div>
        <div className="w-full py-7">
          <h4 className="underline font-semibold">
            Coffee Killer #3: Toxins in the Body
          </h4>
          <p>
            This one actually isn’t coffee’s fault. Instead, it has to do with
            what’s already inside the body. According to Environmental Science &
            Technology, the average American consumes an average of 70,000 bits
            of microplastic every year. Research also shows that adipose tissue
            (AKA body fat) is especially prone to storing organic pollutants.{" "}
            <br />
            <span className="bg-customYellowBg">
              And that’s not to mention the constant barrage of toxins we get
              from:
            </span>
          </p>
        </div>
        <ul className="list-disc text-[1.6rem] my-[4.5rem]">
          <li>Pollution both indoors and outdoors</li>
          <li>Dust</li>
          <li>Mold</li>
          <li>Manufactured woor products</li>
          <li>Household cleaning products</li>
          <li>Processed food</li>
          <li>And more...</li>
        </ul>
        <p className="text-center text-[1.5rem]">
          ALL of these toxins drag down the metabolism. That, in turn, makes it{" "}
          <span className="italic">nearly impossible</span> for the body to get
          the full benefit of positive nutrients like caffeine.
        </p>
        <p className="mt-10 font-bold text-[1.5rem]">
          So what's the solution? Read on to find out!
        </p>
        <CTA />
      </article>
    </section>
  );
};
