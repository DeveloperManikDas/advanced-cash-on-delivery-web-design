"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import { MarqueeDemo } from "../Testimonials";

const Testimonial = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `What Our Customers Are Saying`,
                description: `We are proud of our customers and their success. With over 100 glowing reviews, we celebrate the achievements of our clients and their positive experiences with our services.`,
              }}
            />
          </div>
        </div>
        <MarqueeDemo />
      </section>
    </>
  );
};

export default Testimonial;
