import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import { Navbar } from "shared/components/navbar";
import { Footer } from "shared/components/footer";
import HomePageBody from "./HomePageBody";

const Home = () => {
  const currentUser = useSelector(getCurrentUser);
  return (
    <>
      <Navbar />
      <HomePageBody />
      <Link to={`/profile/${currentUser.id}`}>Profile</Link>
      <Footer />
    </>
  );
};

export default Home;
