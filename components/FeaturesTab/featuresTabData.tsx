import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Restrict Cash on Delivery Based on Pin Code",
    desc1: `Control where Cash on Delivery (COD) is available by restricting specific pin codes. This ensures that COD is offered only in serviceable areas, improving efficiency and reducing risks.`,
    desc2: `Easily manage which regions are eligible for COD, helping you streamline deliveries and avoid delays in non-serviceable areas.`,
    image: "/demo.svg",
    imageDark: "/demo.svg",
  },
  {
    id: "tabTwo",
    title: "Restrict Cash on Delivery Based on Customer Tag",
    desc1: `Add an extra layer of customization by enabling or disabling COD based on customer tags. This allows you to cater COD availability to specific groups, ensuring more control over your orders.`,
    desc2: `By restricting COD for certain customer tags, you can improve order handling and reduce risks associated with high-value or frequent return orders.`,
    image: "/demo.svg",
    imageDark: "/demo.svg",
  },
  {
    id: "tabThree",
    title: "Restrict Cash on Delivery Based on Cart Value",
    desc1: `Set COD availability based on cart value to ensure that only orders above or below a specified amount can choose COD as a payment option.`,
    desc2: `This feature gives you more control over high-value transactions, reducing risks and ensuring profitability for large orders.`,
    image: "/demo.svg",
    imageDark: "/demo.svg",
  },
];

export default featuresTabData;
