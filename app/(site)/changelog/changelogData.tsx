// changelogData.tsx

export interface ChangelogEntry {
    date: string;
    title: string;
    description: string;
    category: string;
    imageSrc: string;
  }
  
  export const changelogData: ChangelogEntry[] = [
    {
      date: "October 26",
      title: "New features for Advanced Cash on Delivery",
      description: "We’ve introduced new features to improve the cash-on-delivery experience, including advanced payment tracking and streamlined checkout options.",
      category: "Feature",
      imageSrc: "/demo.svg", // Replace with actual image path
    },
    {
      date: "September 15",
      title: "Performance improvements and bug fixes",
      description: "Enhanced performance and fixed bugs for a smoother user experience, including faster load times and improved accuracy in order tracking.",
      category: "Fix",
      imageSrc: "/demo.svg", // Replace with actual image path
    },
    {
      date: "August 10",
      title: "UI Enhancements",
      description: "Made updates to the UI for a cleaner and more intuitive experience, including updated icons and improved navigation.",
      category: "Update",
      imageSrc: "/demo.svg", // Replace with actual image path
    },
  ];
  