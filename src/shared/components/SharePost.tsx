import { FormEvent, useState } from "react";
import {
  SendOutlined,
  InsertPhotoOutlined,
} from "@mui/icons-material";
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
import FadeDropdown from "./FadeDropdown";

type SharePostProps = {
  readonly profilePic?: string;
  onPost?: (value: any) => void;
};

const SharePost = ({ profilePic, onPost }: SharePostProps) => {
  const user = useSelector(getCurrentUser);
  const {
    themeColor: { color, navButtons, backgroundColor },
  } = useTheme();

  const [categorySelection, setCategorySelection] = useState("");

  const categoryOptions = [
    { title: "All", onClick: () => setCategorySelection("all") },
    { title: "Jobs", onClick: () => setCategorySelection("jobs") },
    { title: "Housing", onClick: () => setCategorySelection("housing") },
    { title: "Health", onClick: () => setCategorySelection("health") },
  ];

  const { form, handleChange, resetForm } = useForm<BaseCreatePostModel>({
    media: "",
    content: "",
    categoryName: categorySelection,
  });

  const { content } = form;

  const { onSelectFile, preview, onRemove, selectedFile } = useImageInput();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const endPoint = process.env.REACT_APP_BASE_URL + "/posts";
    const media = selectedFile ? await uploadMedia(selectedFile) : null;

    const postData = {
      content,
      media,
      categoryName: categorySelection,
    };

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

    setCategorySelection("")
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
              placeholder={`What's on your mind ${user.firstName}...`}
            />
            {preview && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <Box component="div" sx={{ m: "auto", mt: "20px" }}>
                <Box sx={{m: 'auto', maxHeight: '400px', maxWidth: '500px'}}>
                <Box
                  component="img"
                  src={preview}
                  alt="Preview of your uploaded image"
                  sx={{ width: "100%", maxHeight: "400px" }}
                />
                </Box>
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
        <Divider sx={{ my: 2, mt: "20px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            display="flex"
            sx={{
              width: "170px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
                  p: "6.5px",
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
                ml: "10px",
              }}
            >
              <Tooltip
                title="Add a category"
                TransitionComponent={Zoom}
                arrow
                sx={{ color, bgcolor: navButtons }}
              >
                <FadeDropdown buttonName={"Tag"} menuItems={categoryOptions} />
              </Tooltip>
            </Box>
            {categorySelection.length > 0 && (
              <Box component="div" sx={{ ml: "20px" }}>
                <Typography color={color} sx={{fontWeight: 'bold'}}>
                  {"#" + categorySelection.toUpperCase()}
                </Typography>
              </Box>
            )}
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
