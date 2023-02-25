import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert, Delete, Edit, Share } from "@mui/icons-material/";
import { UserProfileWidget } from "shared/components";
import { BasePostType } from "shared/types";
import useTheme from "features/theme/useTheme";
import useAnchor from "shared/hooks/useAnchor";
import UserProfileHoverCard from "../UserProfileHoverCard/UserProfileHoverCard";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import ConfirmationModal from "../ConfirmationModal";
import axios from "axios";
import EditPostModal from "../EditPostModal";

type PostTopProps = {
  basePostTopProps: BasePostType;
  onDelete: (id: any) => void;
  onEdit: (value: any) => void;
};

function PostTop({ basePostTopProps, onDelete, onEdit }: PostTopProps) {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const {
    id,
    userId,
    profilePic,
    firstName,
    lastName,
    timestamp,
    content,
    media,
    likes,
    comments,
  } = basePostTopProps;

  const user = useSelector(getCurrentUser);
  const postOptions = [
    user.id === userId ? { title: "Edit", icon: Edit } : {},
    { title: "Share", icon: Share },
  ];

  const {
    anchorEl: menuAnchorElement,
    open: isMenuOpen,
    handleOpen: handleMenuOpen,
    handleClose: handleMenuClose,
  } = useAnchor();

  const [modalClicked, setModalClicked] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => {
    handleMenuClose();
    setOpenEdit(false);
  };

  const deletePostHandler = async (id: number) => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}`;
    await axios.delete(endpoint, {
      withCredentials: true,
    });

    onDelete?.(id);
  };

  const confirmDeletePost = () => {
    setOpenEdit(false);
    deletePostHandler(id);
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
          <UserProfileHoverCard>
            <UserProfileWidget
              firstName={firstName}
              lastName={lastName}
              profilePicture={profilePic}
              timestamp={timestamp}
              boxProps={{ cursor: "pointer" }}
            />
          </UserProfileHoverCard>
          <Box
            component="span"
            sx={{ display: "flex", cursor: "pointer", alignItems: "center" }}
          >
            {user.id === userId && (
              <IconButton
                sx={{ backgroundColor: navButtons, mr: "7px" }}
                onClick={() => setModalClicked(!modalClicked)}
              >
                {modalClicked && (
                  <ConfirmationModal
                    handleClose={handleCloseEdit}
                    handleConfirm={confirmDeletePost}
                  />
                )}
                <Delete sx={{ color }} />
              </IconButton>
            )}
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
              {postOptions.map(
                (option) =>
                  option.title && (
                    <MenuItem key={option.title} onClick={handleOpenEdit}>
                      <Box component="div" sx={{ width: "100%" }}>
                        <Box sx={{ display: "flex" }}>
                          <Box sx={{ display: "flex", mr: "7px" }}>
                            {<option.icon />}
                          </Box>
                          <Box>{option.title}</Box>
                        </Box>
                      </Box>
                    </MenuItem>
                  )
              )}
              <Box>
                {openEdit && (
                  <EditPostModal
                    id={id}
                    content={content}
                    media={media}
                    likes={likes}
                    comments={comments}
                    handleClose={handleCloseEdit}
                    handleConfirm={onEdit}
                  />
                )}
              </Box>
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PostTop;
