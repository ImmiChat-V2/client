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

import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LabelIcon from "@mui/icons-material/Label";

// const sharePostItems: PostItemType[] = [
//   {
//     label: "Media",
//     icon: <InsertPhotoOutlinedIcon sx={{ color: "#45bd62" }} />,
//   },
//   { label: "Tag", icon: <LabelIcon sx={{ color: "#ae83f4" }} /> },
// ];
