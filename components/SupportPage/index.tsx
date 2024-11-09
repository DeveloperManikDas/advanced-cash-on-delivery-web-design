
import { Metadata } from "next";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { FaBook, FaVideo, FaLifeRing, FaFileAlt, FaBlog } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Support - Advanced Cash on Delivery",
  description: "Get in touch with our sales and support teams.",
  // other metadata
};

// Card component to reuse for each section
function Card({ title, description, link, linkText, Icon }) {
  return (
    <div className="flex flex-col justify-start rounded-lg border-2 p-6 border-slate-200">
      <div className="mb-4 flex items-center">
        <Icon className="text-xl" />
        <h2 className="ml-2 text-lg font-semibold">{title}</h2>
      </div>
      <p className="mb-4 text-left text-gray-600">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center rounded-lg  py-2 text-black font-semibold hover:text-gray-300 dark:bg-white dark:text-black"
      >
        {linkText}
        <span className="ml-2">
          <GoChevronRight />
        </span>
      </Link>
    </div>
  );
}

// Array of card details
const cardData = [
  {
    title: "Video Tutorials",
    description:
      "Watch videos to learn how to use our product and discover its features",
    link: "/help-center/video-tutorials",
    linkText: "Watch Now",
    Icon: FaVideo,
  },
  {
    title: "Help & Support",
    description:
      "Ask questions, report issues, or share feedback to get the support you need.",
    link: "#support",
    linkText: "Contact Support",
    Icon: FaLifeRing,
  },
  {
    title: "Documentation",
    description:
      "Explore our docs to understand how to navigate and use our platform well.",
    link: "http://docs.ninjafront.com/",
    linkText: "Read Docs",
    Icon: FaFileAlt,
  },
  {
    title: "Blogs",
    description:
      "Stay updated with our latest posts, insights, and best practices to succeed.",
    link: "/blog",
    linkText: "Read Blogs",
    Icon: FaBlog,
  },
  {
    title: "FAQs",
    description: "Find answers to frequently asked questions and common inquiries.",
    link: "/help-center/all-faq",
    linkText: "View FAQs",
    Icon: FaBook,
  },
  {
    title: "Troubleshooting",
    description: "Get solutions to common issues and troubleshooting guidance.",
    link: "/help-center/troubleshooting",
    linkText: "Troubleshooting",
    Icon: FaLifeRing,
  },
];


export default function SupportPage() {
  return (
    <section className="flex w-full justify-center pb-20">
      <div className="flex w-3/4 flex-col items-center text-center">
        <div className="w-full text-center">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            How can we help?
          </h2>
          <p className="mb-5">
            Get in touch with our sales and support teams for demos, onboarding
            support, or product questions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              linkText={card.linkText}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
