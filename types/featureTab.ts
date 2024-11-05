// types/featureTab.ts

export interface Description {
  title: string;
  text: string;
}

export interface FeatureTab {
  id: string;
  title: string;
  descriptions: Description[];
  image: string;
}