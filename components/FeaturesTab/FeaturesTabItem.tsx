import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, descriptions, image } = featureTab;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-19">
      <div className="w-full lg:w-1/2">
        <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">{title}</h2>
        <ul className="space-y-4 list-disc">
          {descriptions.map((desc, index) => (
            <li key={index}>
              <span className="font-semibold">{desc.title}</span> {desc.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src={image}
          alt={title}
          width={500} // Adjust width as needed
          height={400} // Adjust height as needed
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default FeaturesTabItem;