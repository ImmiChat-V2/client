import { Navbar } from "shared/components/navbar";
import { Footer } from "shared/components/footer";
import ProfilePageBody from "./ProfilePageBody";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <ProfilePageBody />
      <Footer />
    </>
  );
};

export default ProfilePage;
