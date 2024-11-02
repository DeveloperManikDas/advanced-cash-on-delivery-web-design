import React from 'react';

interface ChangelogItemProps {
  date: string;
  title: string;
  description: string;
  tag: string;
  isLastItem: boolean;
}

const ChangelogItem: React.FC<ChangelogItemProps> = ({ date, title, description, tag, isLastItem }) => {
  return (
    <div className="flex items-start">
      {/* Date and Dot */}
      <div className="flex items-center mr-4">
        {/* Date Positioned to the Left of the Dot */}
        <p className="text-gray-500 text-sm mr-4">{date}</p>
        
        <div className="relative flex flex-col items-center">
          {/* Dot */}
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          {/* Vertical Line connecting items */}
          {!isLastItem && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 bg-gray-300" style={{ height: '100px' }}></div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <h3 className="text-lg font-semibold">
          <a href="#" className="hover:underline">{title}</a>
        </h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        
        {/* Tag */}
        <div className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
          tag === 'Feature' ? 'bg-teal-200 text-teal-700' : 'bg-teal-200 text-teal-700'
        }`}>
          {tag}
        </div>
      </div>
    </div>
  );
};

const Changelog: React.FC = () => {
  // Demo data for changelog items
  const changelogData = [
    {
      date: "NOVEMBER 1",
      title: "Configure your combined listings in search and discovery surfaces",
      description: "Merchants using the Combined Listings app can now customize how their combined listings appear in search and product recommendations.",
      tag: "Feature"
    },
    {
      date: "NOVEMBER 1",
      title: "Configure your combined listings in search and discovery surfaces",
      description: "Merchants using the Combined Listings app can now customize how their combined listings appear in search and product recommendations.",
      tag: "New"
    },
    {
      date: "NOVEMBER 1",
      title: "Configure your combined listings in search and discovery surfaces",
      description: "Merchants using the Combined Listings app can now customize how their combined listings appear in search and product recommendations.",
      tag: "New"
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
