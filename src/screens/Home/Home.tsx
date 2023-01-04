import { Link } from "react-router-dom";
import Post from "../../shared/components/post/Post";

const Home = () => {
  return (
    <div>
      <Link to={"/login"}>dasd</Link>
      <Post />
    </div>
  );
};

export default Home;
