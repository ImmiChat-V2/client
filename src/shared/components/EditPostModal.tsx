import { FormEvent, useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Input,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import useTheme from "features/theme/useTheme";
import { Close, Check, InsertPhotoOutlined } from "@mui/icons-material";
import { getSecureUrl, uploadMedia } from "shared/utils/cloudinaryUtil";
import { useForm, useImageInput } from "shared/hooks";
import { BaseCreatePostModel, BaseFeedType } from "shared/types";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import axios from "shared/utils/axios";

type ModalProps = {
  readonly id: number;
  readonly content?: string;
  readonly media?: string;
  readonly likes: { id: number }[];
  readonly comments: { userId: number }[];
  readonly handleClose: () => void;
  readonly handleConfirm: (value: any) => void;
};

function EditPostModal({
  id,
  content,
  media,
  likes,
  comments,
  handleClose,
  handleConfirm,
}: ModalProps) {
  const [modalMedia, setModalMedia] = useState(media || null);
  const user = useSelector(getCurrentUser);
  const {
    isDarkMode,
    themeColor: { backgroundColor, color, navButtons },
  } = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: isDarkMode ? backgroundColor : "white",
    border: "2px solid #000",
    boxShadow: 24,
    color,
    p: 4,
  };

  const { form, handleChange } = useForm<BaseCreatePostModel>({
    media: modalMedia || "",
    content: content || "",
  });

  const { content: FormContent, media: FormMedia } = form;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const endPoint = process.env.REACT_APP_BASE_URL + `/posts/${id}`;
    const media = selectedFile ? await uploadMedia(selectedFile) : modalMedia;

    const updateBody = { content: FormContent, media };
    const res = await axios.put(endPoint, updateBody, {
      withCredentials: true,
    });

    const updatedPost: BaseFeedType = {
      ...res.data.data,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        profilePic: user.profilePic,
      },
      likes,
      comments,
    };

    handleConfirm(updatedPost);

    handleClose();
  };
  const { onSelectFile, preview, onRemove, selectedFile } = useImageInput();

  return (
    <Box>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="Main-text"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Edit Post
          </Typography>
          <Box className="modal-content">
            <Box component="form" onSubmit={handleSubmit}></Box>
            <Box>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: navButtons,
                  pl: "11px",
                  borderRadius: "10px",
                  mt: "20px",
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{ color, width: "99%" }}
                  className="edit-modal-content"
                  placeholder="Add a description..."
                  name="content"
                  value={FormContent}
                  onChange={handleChange}
                />
              </Box>
              {modalMedia || preview ? (
                <Box
                  sx={{
                    mt: "20px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="img"
                    src={modalMedia ? getSecureUrl(modalMedia) : preview}
                    sx={{
                      width: "100%",
                      paddingTop: "5px",
                      m: "auto",
                    }}
                  />
                  <Button
                    component="button"
                    sx={{
                      m: "auto",
                      width: "200px",
                      color: "red",
                      textTransform: "none",
                      "&:hover": { backgroundColor: navButtons },
                      mt: "10px",
                      fontSize: "18px",
                    }}
                    onClick={() => {
                      modalMedia ? setModalMedia(null) : onRemove();
                    }}
                  >
                    Remove Image
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Box
                    component="div"
                    display="flex"
                    sx={{ justifyContent: "center" }}
                  >
                    <label htmlFor="file-upload-modal">
                      <Box
                        component="div"
                        sx={{
                          color: color,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          p: "15px",
                          ":hover": {
                            cursor: "pointer",
                            backgroundColor: navButtons,
                          },
                          mt: "20px",
                          width: "100%",
                        }}
                      >
                        <InsertPhotoOutlined sx={{ color }} />
                        <Typography sx={{ fontSize: "15px", px: "2px" }}>
                          Upload Media
                        </Typography>
                      </Box>
                    </label>
                    <Input
                      id="file-upload-modal"
                      name="media"
                      type="file"
                      sx={{ display: "none" }}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        onSelectFile(e);
                        handleChange(e);
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
          <Box component="div" className="modal-footer" sx={{ mt: "10px" }}>
            <Box
              component="span"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                sx={{
                  p: "10px",
                  textTransform: "none",
                  color: "red",
                  fontSize: "18px",
                  "&:hover": { backgroundColor: navButtons },
                }}
                onClick={handleClose}
              >
                <Close /> Go Back
              </Button>
              {content === FormContent && modalMedia === FormMedia ? (
                <Box component="span" sx={{ pt: "13px" }}>
                  <Typography>No changes</Typography>
                </Box>
              ) : (
                <Button
                  component="button"
                  sx={{
                    p: "10px",
                    textTransform: "none",
                    color: "green",
                    fontSize: "18px",
                    "&:hover": { backgroundColor: navButtons },
                  }}
                  onClick={handleSubmit}
                >
                  Confirm
                  <Check sx={{ ml: "3px" }} />
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default EditPostModal;
