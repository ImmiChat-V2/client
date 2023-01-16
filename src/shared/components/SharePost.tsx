import { FormEvent } from "react";
import { SendOutlined, InsertPhotoOutlined, Label } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  InputBase,
  Typography,
  Input,
} from "@mui/material";
import { useForm, useImageInput } from "../hooks";
import { uploadMedia } from "shared/utils/cloudinaryUtil";
import { BaseCreatePostmodel } from "../types/SharePostTypes";
import axios from "axios";

type SharePostProps = {
  readonly profilePic?: string;
  theme: any;
};

const SharePost = ({ profilePic, theme }: SharePostProps) => {
  const { form, handleChange, resetForm } = useForm<BaseCreatePostmodel>({
    media: "",
    content: "",
    categoryName: "",
  });

  const { content, categoryName } = form;
  const { onSelectFile, preview, onRemove, selectedFile } = useImageInput();
  const { backgroundColor, navButtons, color } = theme;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const endPoint = process.env.REACT_APP_BASE_URL + "/posts";
    const media = selectedFile ? await uploadMedia(selectedFile) : null;
    const postData = { content, media, categoryName };
    const res = await axios.post(endPoint, postData, {
      withCredentials: true,
    });
    onRemove();
    resetForm();
  };

  return (
    <FormControl
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: backgroundColor,
        padding: "25px",
        borderRadius: "10px",
        mt: "3px",
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
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
          <Box width={"100%"}>
            <InputBase
              fullWidth
              name="content"
              value={content}
              onChange={handleChange}
              sx={{
                color: "black",
                backgroundColor: "#ededed",
                paddingLeft: "30px",
                borderRadius: "30px",
              }}
              placeholder="What's on your mind..."
            />
            {preview && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <>
                <Box
                  component="img"
                  src={preview}
                  alt="Preview of your uploaded image"
                  sx={{ width: "100%", paddingTop: "5px" }}
                ></Box>
                <Button
                  color="error"
                  sx={{ fontSize: "11px", borderRadius: "50px" }}
                  onClick={onRemove}
                >
                  Remove
                </Button>
              </>
            )}
          </Box>
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
            <label htmlFor="file">
              <Box
                sx={{
                  color: color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pr: "15px",
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: navButtons,
                  },
                }}
              >
                <InsertPhotoOutlined sx={{ color: "#45bd62" }} />
                <Typography sx={{ fontSize: "12px", px: "2px" }}>
                  Media
                </Typography>
              </Box>
            </label>
            <Input
              id="file"
              type="file"
              sx={{ display: "none" }}
              onChange={onSelectFile}
            />
            <Box>
              <Box
                sx={{
                  color: color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pr: "15px",
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: navButtons,
                  },
                }}
              >
                <Label sx={{ color: "#ae83f4" }} />
                <Typography sx={{ fontSize: "12px", px: "2px" }}>
                  Tag
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            type="submit"
            sx={{
              borderRadius: "20px",
            }}
            variant="contained"
            color="primary"
          >
            <Typography sx={{ fontSize: "12px", px: "2px" }}>Post</Typography>
            <SendOutlined sx={{ fontSize: "11.5px" }} />
          </Button>
        </Box>
      </Box>
    </FormControl>
  );
};

export default SharePost;
