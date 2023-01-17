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
import { useGetPostsByUserQuery } from "features/posts/services/postApiSlice";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import Post from "shared/components/post/Post";
import { BasePostModel } from "features/posts/models/Posts.model";

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
      setPostList(data.data);
    }
  }, []);
  return (
    <Box>
      <Navbar />
      <Grid container columns={24}>
        <Grid item display={{ xs: "none", md: "flex" }} md={4} lg={3}>
          <NavSidebar theme={themeColor} />
        </Grid>
        <Grid item xs={24} md={15} lg={18}>
          <ProfileCard
            user={mockUserData}
            theme={themeColor}
            isCurrentUser={true}
          />
          <SharePost profilePic="" theme={themeColor} />
          <>
            {postList &&
              postList.map((value: BasePostModel) => {
                return (
                  <Post
                    id={value.id}
                    userId={value.userId}
                    profilePic={currentUser.profilePic}
                    content={value.content}
                    media={value.media}
                    timestamp={value.updatedAt}
                    firstName={currentUser.firstName}
                    lastName={currentUser.lastName}
                  />
                );
              })}
          </>
        </Grid>
        <Grid item display={{ xs: "none", md: "flex" }} md={5} lg={3}>
          <ConnectionList theme={themeColor} connectionList={mockFriendList} />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default ProfilePage;
