import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Advanced Cash on Delivery for Shopify - Manage COD Payments, Fees, and Conditions"

,
  description: "Boost profits and streamline your Shopify store with Advanced Cash on Delivery. Set custom fees, hide/show COD based on order value, location, or customer type. Limit COD to specific pin codes or disable for high-risk customers. Get full control over COD payments in just 60 seconds with no commission and unlimited orders. Try it now with a 7-day free trial!"

,
  };

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <FeaturesTab />
      <CTA />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
  );
}
