import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support - Advanced Cash on Delivery",
  description: "Get in touch with our sales and support teams.",
  // other metadata
};

export default function SupportPage() {
  return (
    <section className="flex pb-20 justify-center w-full ">
      <div className="max-w-xl text-center w-3/4 flex flex-col items-center ">
        <div className=" w-full text-center ">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            How can we help?
          </h2>
          <p className="mb-5">
            Get in touch with our sales and support teams for demos, onboarding
            support, or product questions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Sales Card */}
          <div className="rounded-lg border border-gray-600 p-6 shadow-md flex flex-col justify-start">
            <div className="mb-4 flex items-center">
              <span className="text-xl">📧</span>
              <h2 className="ml-2 text-lg font-semibold">Video Tutorials</h2>
            </div>
            <p className="mb-4 text-gray-600 text-left">
              Watch our video tutorials to learn how to use our product and
              features.
            </p>
            <Link
              href="/help-center/video-tutorials"
              className="inline-flex items-center rounded-lg px-4 py-2 text-gray-200 dark:text-black  hover:text-gray-300 bg-black dark:bg-white "
            >
              Watch Now
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Help & Support Card */}
          <div className="rounded-lg border border-gray-600 p-6 shadow-md flex flex-col justify-start">
            <div className="mb-4 flex items-center">
              <span className="text-xl">💬</span>
              <h2 className="ml-2 text-lg font-semibold">Help & support</h2>
            </div>
            <p className="mb-4 text-gray-600 text-left">
              Ask product questions, report problems, or leave feedback.
            </p>
            <Link
              href="#support"
              className="inline-flex items-center rounded-lg px-4 py-2 text-gray-200 dark:text-black  hover:text-gray-300 bg-black dark:bg-white "
            >
              Contact support
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
