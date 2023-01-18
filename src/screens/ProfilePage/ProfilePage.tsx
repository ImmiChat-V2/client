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
import { useGetUserProfileQuery } from "features/userprofile/services/userProfileApiSlice";
import Post from "shared/components/post/Post";
import { BasePostModel } from "features/posts/models/Posts.model";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  const paramId = Number(id);
  const [postList, setPostList] = useState<BasePostModel[]>([]);
  const userProfile: any = useGetUserProfileQuery(paramId);
  const currentUserId = userProfile.data?.data.id as unknown as number;
  const { themeColor } = useTheme();
  const { data, isSuccess } = useGetPostsByUserQuery(currentUserId);

  useEffect(() => {
    if (isSuccess) {
      setPostList(data.data);
    }
  }, [isSuccess]);
  return (
    <Box sx={{ bgcolor: themeColor.backgroundColor }}>
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
            {postList.map((value: BasePostModel) => {
              return (
                <Post
                  id={value.id}
                  userId={value.userId}
                  profilePic={userProfile.data?.data.profilePic}
                  content={value.content}
                  media={value.media}
                  timestamp={value.updatedAt}
                  firstName={userProfile.data!.data.firstName}
                  lastName={userProfile.data!.data.lastName}
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
