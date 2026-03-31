import { Suspense, use } from "react";
import PricingCard from "./PricingCard";

const fetchPricingData = fetch("/premium-tools-data.json").then((res) =>
  res.json(),
);

export default function ProductsSection() {
  const PricingData = use(fetchPricingData);
  return (
    <>
      {PricingData.map((data) => (
        <PricingCard data={data} key={data.id} />
      ))}
    </>
  );
}
