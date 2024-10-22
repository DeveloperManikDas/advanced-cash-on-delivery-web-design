import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "How can I restrict Cash on Delivery based on customer location?",
    ans: "You can easily restrict COD availability by configuring the app to enable or disable the COD option for specific pin codes or regions. This helps you offer COD only in areas where it's feasible for delivery.",
  },
  {
    id: 2,
    quest: "Can I set different COD fees for different regions or order values?",
    ans: "Yes, the Advanced Cash on Delivery feature allows you to set custom COD fees based on regions, order value, or customer groups. This ensures you can maintain profitability by adjusting fees according to different factors.",
  },
  {
    id: 3,
    quest: "Is it possible to disable COD for specific customers or groups?",
    ans: "Absolutely! You can use customer tags to restrict COD availability for certain customer groups. This helps you manage high-risk customers or those with frequent returns.",
  },
  {
    id: 4,
    quest: "How does the app handle large orders with COD?",
    ans: "You can set a minimum or maximum cart value for which COD is available. This feature helps you control COD for high-value transactions, reducing risks associated with large orders.",
  },
  {
    id: 5,
    quest: "Is the setup of Advanced Cash on Delivery complicated?",
    ans: "Not at all! The app is designed to be user-friendly, with an intuitive interface that allows you to set up rules without any technical expertise. You can have COD rules running smoothly in just a few clicks.",
  },
];

export default faqData;
