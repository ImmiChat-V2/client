import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Post from "../../shared/components/post/Post";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to={"/login"}>dasd</Link>
      <Post
        id={1}
        userId={1}
        profilePic={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT5Ah4edUNbM-V9_97QMfJtV04gF5NK1uuw&usqp=CAU"
        }
        firstName={"Anthony"}
        lastName={"Edwards"}
        timePosted={"10 hours ago"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore deleniti expedita necessitatibus quis maiores error ad, pariatur empora labore deleniti expedita necessitatibus quis maiores error ad, pariatur "
        }
        media={
          "https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg"
        }
      />
    </div>
  );
};

export default Home;
