import { FormEvent } from "react";
import {
  Avatar,
  Box,
  Button,
  Input,
  InputBase,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { InsertPhotoOutlined, SendOutlined } from "@mui/icons-material";
import { uploadMedia } from "shared/utils/cloudinaryUtil";
import { useForm, useImageInput } from "shared/hooks";
import useTheme from "features/theme/useTheme";

type ShareCommentProps = {
  onSubmit: (value: { content: string; media: string | null }) => void;
  avatarUrl?: string;
};

const ShareComment = ({ onSubmit, avatarUrl }: ShareCommentProps) => {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const { form, handleChange, resetForm } = useForm<{ content: string }>({
    content: "",
  });
  const { content } = form;
  const { onSelectFile, preview, onRemove, selectedFile } = useImageInput();
  const createComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const media = selectedFile ? await uploadMedia(selectedFile) : null;
    onSubmit({ content, media });
    onRemove();
    resetForm();
  };

  return (
    <Box display="flex">
      <Avatar src={avatarUrl} />
      <Box
        display="flex"
        component="form"
        sx={{
          borderRadius: "5px",
          width: "100%",
          ml: "6px",
        }}
        onSubmit={createComment}
      >
        <Box width="100%">
          {preview && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={preview}
              alt="Preview of your uploaded image"
              style={{ width: "100%" }}
            />
          )}
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
            placeholder="Drop a comment..."
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px="6px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <label htmlFor="file">
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
                    my: "10px",
                    p: "5px",
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
                id="file"
                type="file"
                sx={{ display: "none" }}
                onChange={onSelectFile}
              />
              {preview && (
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
              )}
              <Button
                type="submit"
                sx={{
                  borderRadius: "20px",
                  p: "5px",
                  height: "25px",
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
        </Box>
      </Box>
    </Box>
  );
};

export default ShareComment;
