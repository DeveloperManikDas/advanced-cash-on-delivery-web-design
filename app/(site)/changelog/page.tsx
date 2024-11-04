import React from 'react';
import Image from 'next/image';

interface ChangelogItemProps {
  date: string;
  title: string;
  description: string;
  tag: string;
  isLastItem: boolean;
}

const ChangelogItem: React.FC<ChangelogItemProps> = ({ date, title, description, tag, isLastItem }) => {
  return (
    <div className="flex items-stretch relative">
      {/* Date and Dot */}
      <div className="flex items-strech mr-4">
        {/* Date Positioned to the Left of the Dot */}
        <p className="text-gray-500 text-sm mr-2 w-28">{date}</p>
        
        <div className="relative flex flex-col items-strech">
          {/* Dot */}
          <div className="w-4 h-4 bg-gray-400 rounded-full z-10"></div>
          {/* Vertical Line connecting items */}
          {!isLastItem && (
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 bg-gray-300"
              style={{ top: '16px', height: '100%' }}
            ></div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        {/* Tag Positioned Above Title */}
        <div className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full mb-2 ${
          tag === 'Feature' ? 'bg-teal-200 text-teal-700' : 'bg-blue-200 text-blue-700'
        }`}>
          {tag}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">
          <a href="#" className="hover:underline">{title}</a>
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Image Positioned After Description */}
        <div className="my-2">
          <Image src="/images/features/features-light-01.png" alt="Feature Image" width={300} height={200} />
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
      title: "Configure your combined listings in search and discovery surfaces",
      description: "Merchants using the Combined Listings app can now customize how their combined listings appear in search and product recommendations.",
      tag: "Feature"
    },
    {
      date: "February 15",
      title: "Enhance your search functionality",
      description: "New search capabilities allow merchants to better customize their listing appearances.",
      tag: "New"
    },
    {
      date: "March 10",
      title: "Enhanced product recommendations",
      description: "Added support for more advanced filtering and sorting options in recommendations.",
      tag: "Update"
    }
  ];

  return (
    <div className="container mx-auto p-6 pt-40">
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
