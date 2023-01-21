import {
  Box,
  Button,
  Input,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import useTheme from "features/theme/useTheme";
import { Close, Check, InsertPhotoOutlined, Label } from "@mui/icons-material";
import { getSecureUrl } from "shared/utils/cloudinaryUtil";
import { useImageInput } from "shared/hooks";

type ModalProps = {
  readonly handleClose: () => void;
  readonly handleConfirm?: () => void;
  readonly modalName: string;
  readonly type: string;
  readonly content?: string;
  readonly media?: string;
};

function SimpleModal({
  handleClose,
  modalName,
  type,
  handleConfirm,
  content,
  media,
}: ModalProps) {
  const {
    isDarkMode,
    themeColor: { backgroundColor, color, navButtons },
  } = useTheme();

  const style = {
    position: "absolute" as "absolute",
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
            {modalName}
          </Typography>
          <Box className="modal-content">
            {type === "Edit" && (
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
                    className="nav-search-input"
                    placeholder="Add a description"
                    defaultValue={content}
                  />
                </Box>
                {media ? (
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
                      src={getSecureUrl(media)}
                      sx={{ height: "200px", width: "200px", m: "auto" }}
                    />
                    <Button
                      sx={{
                        m: "auto",
                        width: "200px",
                        color: "red",
                        textTransform: "none",
                        "&:hover": { backgroundColor: navButtons },
                        mt: "10px",
                        fontSize: "18px",
                      }}
                    >
                      Remove Image
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    {" "}
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
                             mt: '20px'
                          }}
                        >
                          <InsertPhotoOutlined sx={{ color }} />
                          <Typography sx={{ fontSize: "12px", px: "2px", }}>
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
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </Box>
          <Box className="modal-footer" sx={{ mt: "10px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
              <Button
                sx={{
                  p: "10px",
                  textTransform: "none",
                  color: "green",
                  fontSize: "18px",
                  "&:hover": { backgroundColor: navButtons },
                }}
                onClick={handleClose}
              >
                Confirm
                <Check sx={{ ml: "3px" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default SimpleModal;
