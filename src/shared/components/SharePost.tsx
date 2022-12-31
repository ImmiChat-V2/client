import { FormEvent } from "react";
import { SendOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  InputBase,
  Typography,
} from "@mui/material";
import { useForm } from "../hooks";
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
        backgroundColor: "#ffffff",
        maxWidth: "600px",
        margin: "auto",
        padding: "25px",
        borderRadius: "10px",
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={sx}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
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
              backgroundColor: "#ededed",
              paddingLeft: "30px",
              borderRadius: "30px",
            }}
            placeholder="What's on your mind..."
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
          <Box
            display="flex"
            sx={{ width: "30%", justifyContent: "space-between" }}
          >
            {sharePostItems.map((item) => (
              <Box
                sx={{
                  color: "#949494",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pr: "15px",
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: "#ededed",
                  },
                }}
              >
                {item.icon}
                {item.label}
              </Box>
            ))}
          </Box>
          <Button
            type="submit"
            sx={{
              borderRadius: "20px",
            }}
            variant="contained"
            color="primary"
          >
            <Typography sx={{ fontSize: "12px" }} pr="6px">
              Post
            </Typography>
            <SendOutlined sx={{ fontSize: "11.5px" }} />
          </Button>
        </Box>
      </Box>
    </FormControl>
  );
};

export default SharePost;
