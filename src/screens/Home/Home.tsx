import { Navbar } from "shared/components/navbar";
import Post from "shared/components/post/Post";
import { Footer } from "shared/components/footer";
import HomePageBody from "./HomePageBody";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePageBody />
      <Footer />
      <Post
        id={1}
        userId={1}
        profilePic={""}
        firstName={"Fake"}
        lastName={"User"}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium consequuntur fuga expedita reiciendis nemo, nesciunt assumenda cumque vel architecto itaque quibusdam deserunt, harum magni quam ab, quas alias ea."
        media="https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw="
      />
    </>
  );
};

export default Home;
