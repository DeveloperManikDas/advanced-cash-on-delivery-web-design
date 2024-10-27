import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Support from '@/components/SupportPage'; // Adjust the path as necessary

export const metadata: Metadata = {
  title: "Support Page - Advanced cash on delivery ",
  description: "This is Support page for Advanced cash on delivery",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pt-40">
      <Support />
      <Contact />
    </div>
  );
};

export default SupportPage;
