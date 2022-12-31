export type BasePostModel = {
  readonly id: number;
  readonly media?: string;
  readonly userId: number;
  readonly content: string;
  readonly categoryName: string;
};

export type BaseCreatePostmodel = {
  readonly media?: string;
  readonly content: string;
  readonly categoryName?: string;
};

export type PostItemType = {
  label: string;
  icon: React.ReactNode;
};

import ImageIcon from "@mui/icons-material/Image";
import LabelIcon from "@mui/icons-material/Label";

// const sharePostItems: PostItemType[] = [
//   { label: "Media", icon: <ImageIcon /> },
//   { label: "Tag", icon: <LabelIcon /> },
// ];
