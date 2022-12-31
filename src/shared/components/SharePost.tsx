import { FormControl, Avatar, TextField, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { InputBase } from "@mui/material";
import { useForm } from "../hooks";
import { FormEvent } from "react";
import { BaseCreatePostmodel } from "../types/SharePostTypes";

type SharePostProps = {
  readonly profilePic: string;
  readonly sx: Record<string, string>;
  readonly sharePostItems: any[];
  readonly onClick: (value: any) => void;
};

const SharePost = ({
  profilePic,
  sx,
  sharePostItems,
  onClick,
}: SharePostProps) => {
  const { form, handleChange } = useForm<BaseCreatePostmodel>({
    media: "",
    content: "",
    categoryName: "",
  });
  const { media, content, categoryName } = form;
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    onClick(form);
  };

  return (
    <FormControl
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "600px",
        border: "2px solid black",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={sx}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Avatar
            alt="profilePic"
            src={profilePic}
            sx={{ width: 52, height: 52, mr: 3 }}
          />
          <InputBase
            name="content"
            value={content}
            onChange={handleChange}
            sx={{
              color: "black",
              width: "500px",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "20px",
            }}
            placeholder="What's on your mind?"
          />
        </Box>
        <Divider sx={{ my: 2, color: "#555555" }}></Divider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {sharePostItems.map((item) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon}
              {item.label}
            </Box>
          ))}
          <Button type="submit" variant="contained">
            Post
          </Button>
        </Box>
      </Box>
    </FormControl>
  );
};

export default SharePost;
