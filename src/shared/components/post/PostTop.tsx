import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert, Delete, Edit, Share } from "@mui/icons-material/";
import { UserProfileWidget } from "shared/components";
import { BasePostTopType } from "shared/types";
import useTheme from "features/theme/useTheme";
import useAnchor from "shared/hooks/useAnchor";
import UserProfileHoverCard from "../UserProfileHoverCard/UserProfileHoverCard";

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

  const {
    anchorEl: menuAnchorElement,
    open: isMenuOpen,
    handleOpen: handleMenuOpen,
    handleClose: handleMenuClose,
  } = useAnchor();

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
          <UserProfileHoverCard>
            <UserProfileWidget
              firstName={firstName}
              lastName={lastName}
              boxProps={{ cursor: "pointer" }}
            />
          </UserProfileHoverCard>
          <Box component="span" sx={{ display: "flex", cursor: "pointer" }}>
            <IconButton sx={{ backgroundColor: navButtons, mr: "7px" }}>
              <Delete sx={{ color }} />
            </IconButton>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={isMenuOpen ? "long-menu" : undefined}
              aria-expanded={isMenuOpen ? "true" : undefined}
              aria-haspopup="true"
              sx={{ backgroundColor: navButtons }}
              onClick={handleMenuOpen}
            >
              <MoreVert sx={{ color }} />
            </IconButton>

            <Menu
              id="long-menu"
              anchorEl={menuAnchorElement}
              open={isMenuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: navButtons,
                  width: "14ch",
                  color,
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.title} onClick={handleMenuClose}>
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
