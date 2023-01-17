import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { ProfileCard } from "features/userprofile/components/ProfileCard";
import { NavSidebar } from "shared/components/NavSidebar";
import { mockUserData } from "shared/utils";
import { SharePost } from "shared/components";
import { Navbar } from "shared/components/navbar";
import { Footer } from "shared/components/footer";
import ConnectionList from "shared/components/ConnectionList";
import { BaseComment } from "features/comments/components";
import { BaseCommentModel } from "features/comments/models/Comments.model";

const mockCommentData: BaseCommentModel = {
  id: 1,
  media:
    "https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg",
  content: "fdsafsdfasfsfsadf content string",
  updatedAt: new Date(),
  userId: 0,
  postId: 0,
  likes: [],
  createdAt: new Date(),
  user: {
    firstName: "dfasfdsafsaf",
    lastName: "cvxzxvzv",
    profilePic: undefined,
  },
};

export const mockFriendList = [
  {
    id: 1,
    email: "fdsjsdf@mfds.com",
    firstName: "Khenen",
    lastName: "Jacqso",
    profilePic: "",
  },
  {
    id: 2,
    email: "fd113df@mfds.com",
    firstName: "Rob",
    lastName: "Bob",
    profilePic: "",
  },
  {
    id: 3,
    email: "zaswaejsdf@mfd6s.com",
    firstName: "Al",
    lastName: "Ringer",
    profilePic: "",
  },
];

const ProfilePage = () => {
  const [postList, setPostList] = useState<BasePostModel[]>([]);
  const { themeColor } = useTheme();
  const currentUser = useSelector(getCurrentUser);
  const { data, isSuccess } = useGetPostsByUserQuery(currentUser.id);

  useEffect(() => {
    if (isSuccess) {
      setPostList(data?.data);
      console.log("sacavo", data);
    }
  }, []);
  return (
    <Box>
      <Navbar />
      <Box>
        <Grid container spacing={2} columns={24}>
          <Grid item display={{ xs: "none", md: "flex" }} md={5} lg={4} xl={3}>
            <NavSidebar theme={themeColor} />
          </Grid>
          <Grid item xs={24} md={14} lg={16} xl={17}>
            <ProfileCard
              user={mockUserData}
              theme={themeColor}
              isCurrentUser={true}
            />
            <BaseComment commentData={mockCommentData} />
            <SharePost profilePic="" theme={themeColor} />
          </Grid>
          <Grid item display={{ xs: "none", md: "flex" }} md={5} lg={4} xl={4}>
            <ConnectionList
              theme={themeColor}
              connectionList={mockFriendList}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProfilePage;
