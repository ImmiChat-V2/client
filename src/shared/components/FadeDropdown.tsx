import { KeyboardArrowDown } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

type MenuOption = {
  readonly title: string;
  readonly onClick: () => void;
};

type FadeDropdownProps = {
  readonly menuItems: MenuOption[];
  readonly buttonName: string;
  readonly darkMode?: boolean;
};

const FadeDropdown = ({
  buttonName,
  menuItems,
  darkMode,
}: FadeDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        sx={{
          backgroundColor: darkMode ? "#2d2d2d" : "#ededed",
          color: darkMode ? "#ededed" : "#2d2d2d",
          fontWeight: "600",
          textTransform: "none",
          "&.MuiButtonBase-root:hover": {
            bgcolor: darkMode ? "#2d2d2d" : "#ededed",
          },
        }}
      >
        {buttonName}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems.map(({ onClick, title }) => (
          <MenuItem onClick={onClick} key={title}>
            {title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default FadeDropdown;
