import FeatureList from "../../UI/FeatureList";

export default function PricingCard({
  data: { name, description, price, tag, period, icon, features },
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-sm border border-gray-300">
      <div className="card-body">
        <span className="bg-yellow-100 rounded-full self-end text-yellow-700 font-medium px-3 py-1.5">
          {tag}
        </span>
        <img src={icon} alt={name} className="w-fit mb-3" />

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl/[33px] font-bold">{name}</h2>
          <p className="text-gray-500 mt">{description}</p>
          <p className="text-xl">
            ${price}/{period}
          </p>
          {features.length > 0 && <FeatureList features={features} />}
        </div>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
