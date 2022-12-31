import { useState } from "react";
import { Box, Slide, Typography, Button } from "@mui/material";

const FeedFilter = () => {
  const [checked, setChecked] = useState(false);
  const [isDisplayNone, setIsDisplayNone] = useState(false);
  const handleChange = () => {
    if (checked) {
      setChecked(false);
      setTimeout(() => {
        setIsDisplayNone(false);
      }, 500);
    } else {
      setChecked(true);
      setIsDisplayNone(true);
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="end" overflow="hidden">
        <Slide direction="right" in={!checked} exit={false}>
          <Button
            sx={{ display: isDisplayNone ? "none" : "block" }}
            onClick={handleChange}
          >
            Show Filter Options
          </Button>
        </Slide>
        <Slide
          direction="left"
          in={checked}
          mountOnEnter
          unmountOnExit
          timeout={500}
        >
          <Box display="flex" alignItems="center">
            <Typography px="8px">Category</Typography>
            <Typography px="8px">Language</Typography>
            <Typography px="8px">Connected</Typography>
            <Button onClick={handleChange}>Close Filter Options</Button>
          </Box>
        </Slide>
      </Box>
    </>
  );
};

export default FeedFilter;
