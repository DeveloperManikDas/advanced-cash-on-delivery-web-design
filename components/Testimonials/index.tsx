import Marquee from "@/components/ui/marquee";

import { cn } from "@/lib/utils";

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];


const reviews = [
  {
    name: "Shrus",
    username: "India",
    body: "They resolved a long-standing COD issue within minutes, even late at night. Their quick response saved me a lot of trouble. Highly recommended if you’re looking for an app with reliable support!",
    img: "https://avatar.vercel.sh/itsben",
  },
  {
    name: "Gute Reise",
    username: "India",
    body: "An essential tool for Shopify store owners looking to streamline their COD process. It allows precise control over COD options based on product categories, order value, and customer location. The interface is user-friendly, making it easy to set up complex rules without technical expertise.",
    img: "https://avatar.vercel.sh/gutereise",
  },
  {
    name: "Big Bear Farms",
    username: "India",
    body: "Super app. I had an issue that was resolved super fast with the help of Sabeeh. He jumped on a call and helped us out within 2 mins of chatting with him. Pricing is good too! Highly recommended.",
    img: "https://avatar.vercel.sh/mystore",
  },
  {
    name: "Lildrama",
    username: "India",
    body: "Amazing support from the team. From the moment I installed the app till setting it up, Sabeeh ensured the whole onboarding process was smooth. Amazing support and great customer-friendly app. Definitely recommend it to everyone.",
    img: "https://avatar.vercel.sh/menworks",
  },
  {
    name: "Auroraa Studio",
    username: "Romania",
    body: "I had some confusion about setting up COD for my store, but Sabeeh was a lifesaver! He patiently walked me through every step, provided clear instructions, and even stayed with me until the app was running smoothly. His professionalism and dedication made the whole process effortless. Highly recommend both the app and Sabeeh’s amazing support!",
    img: "https://avatar.vercel.sh/itsben",
  },
  {
    name: "Supertails",
    username: "India",
    body: "Absolutely brilliant app that solves the problem of Cash on Delivery. The developer is very prompt in helping out with integration and providing extended support.",
    img: "https://avatar.vercel.sh/gutereise",
  },
  {
    name: "CozyOnCozy",
    username: "Lebanon",
    body: "The customer service was really good and helped me with everything.",
    img: "https://avatar.vercel.sh/mystore",
  },
  {
    name: "WiLLSPER",
    username: "United Arab Emirates",
    body: "Works well, as described. Great and quick customer support. Recommended.",
    img: "https://avatar.vercel.sh/menworks",
  },
  {
    name: "Delulu Jewels",
    username: "Greece",
    body: "Very helpful, responded immediately and sent me a personalised video to solve my problem immediately!! Great app, working perfectly so far.",
    img: "https://avatar.vercel.sh/itsben",
  },
  {
    name: "Roohi Fragrances",
    username: "India",
    body: "Best solution for COD with fees and shipping rates. I am very happy with the service and support. Thank you, Team. We appreciate. Go for it.",
    img: "https://avatar.vercel.sh/gutereise",
  },
];

export default reviews;



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}