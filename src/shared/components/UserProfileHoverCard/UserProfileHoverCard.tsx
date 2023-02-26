import { Avatar, Box, Typography, Popover, Button } from "@mui/material";
import {
  SupervisedUserCircle,
  Groups,
  PersonAdd,
  Message,
} from "@mui/icons-material/";
import useTheme from "features/theme/useTheme";
import useAnchor from "shared/hooks/useAnchor";

type UserProfileHoverCardProps = {
  children: JSX.Element;
  firstName: string;
  lastName: string;
  profilePicture: string | undefined;
};

const UserProfileHoverCard = ({ children, firstName, lastName, profilePicture }: UserProfileHoverCardProps) => {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const { open, handleClose, handleOpen, anchorEl } = useAnchor();
  return (
    <Box onMouseEnter={handleOpen}>
      {children}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ bgcolor: navButtons, color, maxWidth: "350px" }}>
          <Box
            className="pop-over-profile-pic-and-info"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              bgcolor: navButtons,
              p: "25px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar
                src={profilePicture}
                sizes="80px"
                sx={{ height: "60px", width: "60px", mr: "15px", mt: "8px" }}
              />
              <Box className="pop-over-user-info">
                <Typography
                  fontSize="18px"
                  fontWeight="bold"
                  color={color}
                  sx={{ ml: "35px" }}
                >
                  {firstName} {lastName}
                </Typography>
                <Box sx={{ display: "flex", mt: "8px" }}>
                  <SupervisedUserCircle
                    sx={{ color, mr: "5px", fontSize: "30px" }}
                  />
                  <Typography fontSize="15px">
                    Became friends with <strong>Shelly Revivo</strong> and{" "}
                    <strong>David Li</strong>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mt: "8px" }}>
                  <Groups sx={{ color, mr: "5px", fontSize: "30px" }} />
                  <Typography fontSize="15px">
                    10 Mutual friends including <strong>David</strong> and{" "}
                    <strong>Jose</strong>{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="pop-over-footer" sx={{ pb: "15px", mt: "-15px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: navButtons,
                  "&:hover": {
                    backgroundColor: navButtons,
                  },
                  textTransform: "none",
                  color,
                }}
              >
                <PersonAdd sx={{ mr: "5px", fontSize: "20px" }} />
                Friends
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: navButtons,
                  "&:hover": {
                    backgroundColor: navButtons,
                  },
                  textTransform: "none",
                  color,
                }}
              >
                <Message sx={{ mr: "5px", fontSize: "20px" }} />
                Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default UserProfileHoverCard;
