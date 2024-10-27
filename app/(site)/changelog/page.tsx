import { Metadata } from "next";
import { changelogData } from "./changelogData";
import type { ChangelogEntry } from "./changelogData";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Changelog - Advanced Cash on Delivery",
  description:
    "Stay up-to-date with the latest updates and improvements for Advanced Cash on Delivery.",
};

export default function ChangelogPage() {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto lg:w-3/4">
        <div className="lg:w-3/4 mb-16">
          <h1 className="mb-4 text-4xl font-bold">Changelog</h1>
          <p className="mb-12 text-lg">
            Stay informed about the latest features, fixes, and updates for
            Advanced Cash on Delivery.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 ">
            {changelogData.map((entry, index) => (
              <ChangelogEntry key={index} {...entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChangelogEntry({
  date,
  title,
  description,
  category,
  imageSrc,
}: ChangelogEntry) {
  return (
    <div className="mb-8 rounded-lg p-6">
      <div className="mb-4 flex items-center">
        <span className="mr-2 text-white px-2 py-1 text-sm font-semibold bg-green-700 rounded-full">
          {category}
        </span>
        <span className="text-sm">{date}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={title}
          className="rounded-lg"
          width={700}
          height={300}
        />
      </div>
    </div>
  );
}
