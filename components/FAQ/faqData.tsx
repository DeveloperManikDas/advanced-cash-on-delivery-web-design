import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Will the app access my customer or order information?",
    ans: "No, we do not have access to your store data. We only use the Shopify Functions API to implement customizations, ensuring that your customer and order information remains secure and private. Your data is not collected or stored by our app, allowing you to maintain full control over your store's information.",
  },
  {
    id: 2,
    quest: "How easy is it to set up the app?",
    ans: "Absolutely! The app is designed for easy configuration with user-friendly settings. You can set up and customize your preferences quickly, even if you’re not technically inclined. Our step-by-step guidance will help you get started in no time.",
  },
  {
    id: 3,
    quest: "Can I choose to hide COD for certain pin codes?",
    ans: "Yes, you can easily restrict Cash on Delivery (COD) availability for specific pin codes.",
  },
  {
    id: 4,
    quest: "What about personalized products? Can I hide COD for them?",
    ans: "Yes, you can hide COD options for personalized products. You can easily manage this using the product tags or collection features in the app.",
  },
  {
    id: 5,
    quest: "Is there a way to hide COD for specific customers?",
    ans: "Yes, you can restrict COD for specific customers by using customer tags.",
  },
];

export default faqData;
