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
  Tooltip,
  Zoom,
} from "@mui/material";
import { useForm, useImageInput } from "../hooks";
import { uploadMedia } from "shared/utils/cloudinaryUtil";
import { BaseCreatePostModel } from "../types/SharePostTypes";
import axios from "shared/utils/axios";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import { BaseFeedType } from "shared/types";
import useTheme from "features/theme/useTheme";

type SharePostProps = {
  readonly profilePic?: string;
  onPost?: (value: any) => void;
};

const SharePost = ({ profilePic, onPost }: SharePostProps) => {
  const user = useSelector(getCurrentUser);
  const {
    themeColor: { color, navButtons, backgroundColor },
  } = useTheme();

  const { form, handleChange, resetForm } = useForm<BaseCreatePostModel>({
    media: "",
    content: "",
    categoryName: "",
  });

  const { content, categoryName } = form;
  const { onSelectFile, preview, onRemove, selectedFile } = useImageInput();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const endPoint = process.env.REACT_APP_BASE_URL + "/posts";
    const media = selectedFile ? await uploadMedia(selectedFile) : null; 
       
    const postData = { content, media, categoryName };
    const res = await axios.post(endPoint, postData, {
      withCredentials: true,
    });

    const newPostInfo: BaseFeedType = {
      ...res.data.data,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        profilePic: user.profilePic,
      },
      likes: [],
      comments: [],
    };
    onRemove();
    resetForm();
    onPost?.(newPostInfo);
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
            sx={{ width: 52, height: 52, mr: 2 }}
          />
          <Box width={"100%"}>
            <InputBase
              fullWidth
              name="content"
              value={content}
              onChange={handleChange}
              sx={{
                color,
                backgroundColor: navButtons,
                borderRadius: "20px",
                p: "5px",
                paddingLeft: "20px",
              }}
              placeholder="What's on your mind..."
            />
            {preview && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <Box component="div" sx={{ m: "auto", mt: "20px" }}>
                <Box
                  component="img"
                  src={preview}
                  alt="Preview of your uploaded image"
                  sx={{ width: "100%", height: "100%" }}
                />
                <Button
                  color="error"
                  sx={{
                    fontSize: "12px",
                    borderRadius: "50px",
                    mt: "10px",
                    width: "80px",
                    height: "50px",
                  }}
                  onClick={onRemove}
                >
                  Remove
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <Divider sx={{ my: 2, mt: "20px", bgcolor: navButtons }}></Divider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            display="flex"
            sx={{ width: "170px", justifyContent: "space-between" }}
          >
            <label htmlFor="file-upload-post">
              <Box
                sx={{
                  color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: navButtons,
                  },
                  p: "10px",
                }}
              >
                <InsertPhotoOutlined sx={{ color }} />
                <Tooltip
                  title="Upload an item"
                  TransitionComponent={Zoom}
                  arrow
                  sx={{ color, bgcolor: navButtons }}
                >
                  <Typography sx={{ fontSize: "15px", px: "2px", color }}>
                    Media
                  </Typography>
                </Tooltip>
              </Box>
            </label>
            <Input
              id="file-upload-post"
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
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: navButtons,
                  },
                  p: "10px",
                }}
              >
                <Label sx={{ color }} />
                <Tooltip
                  title="Add a category"
                  TransitionComponent={Zoom}
                  arrow
                  sx={{ color, bgcolor: navButtons }}
                >
                  <Typography sx={{ fontSize: "15px", px: "2px", color }}>
                    Tag
                  </Typography>
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Button
            type="submit"
            sx={{
              borderRadius: "20px",
              p: "15px",
              height: "35px",
              mt: "5px",
            }}
            variant="contained"
            color="primary"
            disabled={!content && !preview}
          >
            <Typography
              sx={{ fontSize: "15px", px: "4px", textTransform: "none" }}
            >
              Post
            </Typography>
            <SendOutlined sx={{ fontSize: "15px" }} />
          </Button>
        </Box>
      </Box>
    </FormControl>
  );
};

export default SharePost;
