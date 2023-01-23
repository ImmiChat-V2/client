import {
  Avatar,
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import useTheme from "features/theme/useTheme";

function CommentSection() {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const messageExamples = [
    {
      primary: "Brunch this week?",
      secondary:
        "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: "/static/images/avatar/5.jpg",
      profile:
        "https://images.theconversation.com/files/285143/original/file-20190722-11355-1peled7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    },
    {
      primary: "Birthday Gift",
      secondary: `Do you have a suggestion for a good present for John on his work
          anniversary. I am really confused & would love your thoughts on it.`,
      person: "/static/images/avatar/1.jpg",
      profile:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F1b4477ee-dfed-45d6-8444-2656687e5e37.jpg?fit=scale-down&source=next&width=700",
    },
    {
      primary: "Recipe to try",
      secondary:
        "I am try out this new BBQ recipe, I think this might be amazing",
      person: "/static/images/avatar/2.jpg",
      profile: "https://ychef.files.bbci.co.uk/976x549/p011wf95.jpg",
    },
  ];
  return (
    <Box sx={{ bgcolor: navButtons, height: "200px", overflow: "auto" }}>
      <CssBaseline />
      <List>
        {messageExamples.map(
          ({ primary, secondary, person, profile }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ height: "100px", width: "100px" }}>
                  <Box
                    component="img"
                    src={profile}
                    height="100%"
                    width="100%"
                  />
                </Box>
                <ListItemText
                  primary={secondary}
                  secondary={primary}
                  sx={{ color }}
                />
              </Box>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
}

export default CommentSection;
