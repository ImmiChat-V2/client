import { Link } from "react-router-dom";
import Navbar from "../../shared/components/navbar/Navbar";
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Link to={"/login"}>dasd</Link>
    </div>
  );
};

export default Home;
