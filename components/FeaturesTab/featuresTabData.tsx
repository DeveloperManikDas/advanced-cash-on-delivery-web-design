import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Restrict Cash on Delivery Based on Customer Location",
    descriptions: [
      {
        title: "Limit COD by Country:",
        text: "Hide COD options outside of India to target your market.",
      },
      {
        title: "Pin Code Control:",
        text: "Restrict COD availability to specific pin codes for focused service.",
      },
      {
        title: "State and Province Restrictions:",
        text: "Set limits based on states or provinces for tailored offerings!",
      },
    ],
    image: "/demo.svg",
  },
  {
    id: "tabTwo",
    title: "Limit Cash on Delivery Based on Product Properties",
    descriptions: [
      {
        title: "Specific Products and Collections:",
        text: "Hide COD for personalized products or selected collections.",
      },
      {
        title: "Product Tags:",
        text: "Manage COD availability with specific tags.",
      },
      {
        title: "Product Vendor Name Restrictions: ",
        text: "Control COD access based on product vendor names.",
      },
    ],
    image: "/demo.svg",
  },
  {
    id: "tabThree",
    title: "Control Cash on Delivery Based on Customer",
    descriptions: [
      {
        title: "",
        text: "Manage COD access by tagging customers with a history of high return-to-origin (RTO) rates. Additionally, set criteria based on customer email addresses and phone numbers for added security. This ensures that only reliable customers can access this payment method.",
      },
      {
        title: "",
        text: "",
      },
      {
        title: "",
        text: "",
      },
    ],
    image: "/demo.svg",
  },
  
];

export default featuresTabData;