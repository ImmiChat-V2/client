import { Box, Button, Modal, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { Close, Check } from "@mui/icons-material";

type ModalProps = {
  readonly handleClose: () => void;
  readonly handleConfirm?: () => void;
  readonly modalName: string;
  readonly innerComponent?: any;
};

function SimpleModal({ handleClose, modalName, innerComponent: Component, handleConfirm }: ModalProps) {
  const {
    themeColor: { backgroundColor, color, navButtons },
  } = useTheme();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: backgroundColor,
    border: "2px solid #000",
    boxShadow: 24,
    color,
    p: 4,
  };

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
            {Component && <Component />}
            
          </Box>
          <Box className="modal-footer" sx={{ mt: "20px" }}>
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
