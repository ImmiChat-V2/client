import { FormEvent } from "react";
import { Avatar, Box, Button, TextareaAutosize, Input } from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
import { uploadMedia } from "shared/utils/cloudinaryUtil";
import { useForm, useImageInput } from "shared/hooks";

type ShareCommentProps = {
  onSubmit: (value: { content: string; media: string | null }) => void;
  avatarUrl?: string;
};

const ShareComment = ({ onSubmit, avatarUrl }: ShareCommentProps) => {
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
          border: "1px solid black",
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
          <TextareaAutosize
            minRows={6}
            value={content}
            name="content"
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 5,
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px",
              border: "none",
              resize: "none",
              boxSizing: "border-box",
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px="6px"
          >
            <Box display="flex" alignItems="center">
              <label htmlFor="file-upload-comment">
                <CameraAltOutlined
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      caretColor: "black",
                    },
                  }}
                />
              </label>
              <Input
                id="file-upload-comment"
                type="file"
                sx={{ display: "none" }}
                onChange={onSelectFile}
              />
              {preview && (
                <Button
                  color="error"
                  sx={{ fontSize: "11px", borderRadius: "50px" }}
                  onClick={onRemove}
                >
                  Remove
                </Button>
              )}
            </Box>
            <Button
              sx={{ fontSize: "11px", borderRadius: "50px" }}
              type="submit"
              disabled={content.trim() === "" && !preview}
            >
              Reply
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShareComment;
