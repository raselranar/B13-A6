import Card from "./Card.jsx";
import pricingPlans from "./PricingPlans.js";

export default function PriceSection() {
  return (
    <section className="py-15 md:py-20 px-3">
      <div className="">
        {/* heading part */}
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-3xl/relaxed lg:text-5xl">
            Get Started in 3 Steps
          </h2>
          <p className="text-[14px] mt-2 sm:text-lg text-center text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* cards */}
        <div className="w-10/12 mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-4">
          {pricingPlans.map((pricingPlan, i) => (
            <Card key={i} pricingPlan={pricingPlan} />
          ))}
        </div>
      </div>
    </section>
  );
}
