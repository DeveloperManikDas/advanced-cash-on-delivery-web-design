import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Restrict Cash on Delivery Based on Customer Location",
    desc1: `Limit COD by Country: Hide COD options outside of India to target your market.`,
    desc2: `Pin Code Control: Restrict COD availability to specific pin codes for focused service.`,
    desc3: `State and Province Restrictions: Set limits based on states or provinces for tailored offerings!`,
    image: "/demo.svg",
    imageDark: "/demo.svg",
  },
  {
    id: "tabTwo",
    title: "Limit Cash on Delivery Based on Product Properties",
    desc1: `Specific Products and Collections: Hide COD for personalized products or selected collections.`,
    desc2: `Product Tags: Manage COD availability with specific tags.`,
    desc3: `Product Vendor Name Restrictions: Control COD access based on product vendor names.`,
    image: "/demo.svg",
    imageDark: "/demo.svg",
  },
  {
    id: "tabThree",
    title: "Control Cash on Delivery Based on Customer  ",
    desc1: `Manage COD access by tagging customers with a history of high return-to-origin (RTO) rates. `,
    desc2: `Additionally, set criteria based on customer email addresses and phone numbers for added security.`,
    desc3: `This ensures that only reliable customers can access this payment method.`,
    image: "/demo.svg",
    imageDark: "/demo.svg",
  },
];

export default featuresTabData;
