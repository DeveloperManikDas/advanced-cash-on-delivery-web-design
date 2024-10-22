import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "ItsBen LifeStyle",
    designation: "Shopify Store Owner, India",
    image: image1,
    content:
      "An essential tool for Shopify store owners looking to streamline their COD process. It allows precise control over COD options based on product categories, order value, and customer location. The interface is user-friendly, making it easy to set up complex rules without technical expertise.",
  },
  {
    id: 2,
    name: "Gute Reise",
    designation: "Shopify Store Owner, India",
    image: image2,
    content:
      "I absolutely love this app and its support team! They helped me set up everything smoothly, and their assistance has been incredible. This app is a game-changer for my store, and I highly recommend it to everyone looking to enhance their cash-on-delivery functionality. Definitely a must-have!",
  },
  {
    id: 3,
    name: "My Store",
    designation: "Shopify Store Owner, India",
    image: image1,
    content:
      "Excellent app, excellent customer support. Just loved everything about it.",
  },
  {
    id: 4,
    name: "Menworks®",
    designation: "Shopify Store Owner, India",
    image: image2,
    content:
      "Super app. I had an issue that was resolved super fast with the help of Sabeeh. He jumped on a call and helped us out within 2 mins of chatting with him. Pricing is good too! Highly recommended.",
  },
];

export default testimonialData;
