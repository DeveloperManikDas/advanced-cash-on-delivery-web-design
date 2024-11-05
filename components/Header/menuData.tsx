import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/features",
  },
  {
    id: 2.1,
    title: "Docs",
    newTab: false,
    path: "http://docs.ninjafront.com/",
  },
  {
    id: 2.3,
    title: "Changelog",
    newTab: false,
    path: "/changelog",
  },

  {
    id: 4,
    title: "Help Center",
    newTab: false,
    path: "/help-center",
  },
];

export default menuData;
