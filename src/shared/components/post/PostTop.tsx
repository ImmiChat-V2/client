import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert, Delete, Edit, Share } from "@mui/icons-material/";
import { UserProfileWidget } from "shared/components";
import { BasePostTopType } from "shared/types";
import useTheme from "features/theme/useTheme";

const options = [
  { title: "Edit", icon: Edit },
  { title: "Share", icon: Share },
];

function PostTop({
  id,
  userId,
  profilePic,
  firstName,
  lastName,
  timestamp,
}: BasePostTopType) {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          pt: "25px",
          display: "flex",
        }}
        className="post-top"
      >
        <Box
          component="div"
          className="post-user-info-and-utilities"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <UserProfileWidget
            firstName={firstName}
            lastName={lastName}
            boxProps={{ cursor: "pointer" }}
          />
          <Box component="span" sx={{ display: "flex", cursor: "pointer" }}>
            <IconButton sx={{ backgroundColor: navButtons, mr: "7px" }}>
              <Delete sx={{ color }} />
            </IconButton>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleOpen}
              sx={{ backgroundColor: navButtons }}
            >
              <MoreVert sx={{ color }} />
            </IconButton>

            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  backgroundColor: navButtons,
                  width: "14ch",
                  color,
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option.title}
                  selected={option.title === "Pyxis"}
                  onClick={handleClose}
                >
                  <Box component="div" sx={{ width: "100%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", mr: "7px" }}>
                        {<option.icon />}
                      </Box>
                      {option.title}
                    </Box>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PostTop;
