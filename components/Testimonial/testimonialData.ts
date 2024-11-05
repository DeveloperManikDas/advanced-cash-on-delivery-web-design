import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Will the app access my customer or order information?",
    designation: "No, we do not have access to your store data.",
    image: image1,
    content:
      "We only use the Shopify Functions API to implement customizations, ensuring that your customer and order information remains secure and private. Your data is not collected or stored by our app, allowing you to maintain full control over your store's information.",
  },
  {
    id: 2,
    name: "How easy is it to set up the app?",
    designation: "Absolutely!",
    image: image2,
    content:
      "The app is designed for easy configuration with user-friendly settings. You can set up and customize your preferences quickly, even if you’re not technically inclined. Our step-by-step guidance will help you get started in no time.",
  },
  {
    id: 3,
    name: "Can I choose to hide COD for certain pin codes?",
    designation: "Yes, you can restrict COD availability.",
    image: image1,
    content:
      "You can easily restrict Cash on Delivery (COD) availability for specific pin codes.",
  },
  {
    id: 4,
    name: "What about personalized products? Can I hide COD for them?",
    designation: "Yes, COD can be hidden for personalized products.",
    image: image2,
    content:
      "You can hide COD options for personalized products by using the product tags or collection features in the app.",
  },
  {
    id: 5,
    name: "Is there a way to hide COD for specific customers?",
    designation: "Yes, restrict COD for specific customers.",
    image: image1,
    content:
      "You can restrict COD for specific customers by using customer tags.",
  },
];

export default testimonialData;
