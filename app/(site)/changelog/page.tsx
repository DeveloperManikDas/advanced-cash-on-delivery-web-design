import React from "react";
import Image from "next/image";

interface ChangelogItemProps {
  date: string;
  title: string;
  description: string;
  tag: string;
  isLastItem: boolean;
}

const ChangelogItem: React.FC<ChangelogItemProps> = ({
  date,
  title,
  description,
  tag,
  isLastItem,
}) => {
  return (
    <div className="relative flex items-stretch">
      {/* Date and Dot */}
      <div className="items-strech mr-4 flex">
        {/* Date Positioned to the Left of the Dot */}
        <p className="mr-2 w-28 text-sm text-gray-500">{date}</p>

        <div className="items-strech relative flex flex-col">
          {/* Dot */}
          <div className="z-10 h-4 w-4 rounded-full bg-gray-400"></div>
          {/* Vertical Line connecting items */}
          {!isLastItem && (
            <div
              className="absolute left-1/2 top-4 w-0.5 -translate-x-1/2 bg-gray-300"
              style={{ top: "16px", height: "100%" }}
            ></div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        {/* Tag Positioned Above Title */}
        <div
          className={`mb-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
            tag === "Feature"
              ? "bg-teal-200 text-teal-700"
              : "bg-blue-200 text-blue-700"
          }`}
        >
          {tag}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold">
          <a href="#" className="hover:underline">
            {title}
          </a>
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600">{description}</p>

        {/* Image Positioned After Description */}
        <div className="my-2">
          <Image
            src="/images/features/features-light-01.png"
            alt="Feature Image"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

const Changelog: React.FC = () => {
  // Demo data for changelog items
  const changelogData = [
    {
      date: "January 01",
      title:
        "Configure your combined listings in search and discovery surfaces",
      description:
        "Merchants using the Combined Listings app can now customize how their combined listings appear in search and product recommendations.",
      tag: "Feature",
    },
    {
      date: "February 15",
      title: "Enhance your search functionality",
      description:
        "New search capabilities allow merchants to better customize their listing appearances.",
      tag: "New",
    },
    {
      date: "March 10",
      title: "Enhanced product recommendations",
      description:
        "Added support for more advanced filtering and sorting options in recommendations.",
      tag: "Update",
    },
  ];

  return (
    <div className="container mx-auto p-6 pt-40">
      <h2 className="mb-4 text-center text-4xl font-bold text-black">Changelog</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
        Stay updated with the latest features, updates, and improvements to our
        platform.
      </p>
      {changelogData.map((item, index) => (
        <ChangelogItem
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
          tag={item.tag}
          isLastItem={index === changelogData.length - 1}
        />
      ))}
    </div>
  );
};

export default Changelog;
