import { Box, IconButton } from "@mui/material";
import { FavoriteBorder, PersonAdd, MoreHoriz } from "@mui/icons-material/";
import "./post.css";

function Post() {
  return (
    <Box
      component="div"
      sx={{
        maxHeight: "615px",
        maxWidth: "500px",
        backgroundColor: "white",
        borderRadius: "10px",
        mb: "100px",
      }}
    >
      <Box component="div" className="post-content">
        <Box
          component="div"
          sx={{
            pt: "25px",
            display: "flex",
          }}
          className="post-top"
        >
          <Box component="div" sx={{ mr: "10px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT5Ah4edUNbM-V9_97QMfJtV04gF5NK1uuw&usqp=CAU"
              width="50px"
              height="50px"
              className="post-user-profile-img"
            />
          </Box>
          <Box
            component="div"
            className="post-user-info-and-utilities"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box component="span" sx={{ cursor: "pointer" }}>
              <h4 className="post-user-name">Fake User</h4>
              <div className="time-posted-ago">3 Hours ago</div>
            </Box>
            <Box component="span" sx={{ display: "flex", cursor: "pointer" }}>
              <IconButton
                aria-label="add-user"
                sx={{
                  backgroundColor: "#e1f9fc",
                  borderRadius: "50px",
                  height: "40px",
                  width: "40px",
                  pt: "5px",
                }}
              >
                <PersonAdd color="primary" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box component="section" sx={{ mt: "15px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            labore deleniti expedita necessitatibus quis maiores error ad,
            pariatur empora labore deleniti expedita necessitatibus quis maiores
            error ad, pariatur
          </p>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", mt: "20px", justifyContent: "center" }}
        >
          <img
            src="https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg"
            className="post-img"
          />
        </Box>
        <hr style={{ marginTop: "20px" }}></hr>
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "10px",
            pb: "10px",
          }}
        >
          <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="like-post"
              sx={{
                backgroundColor: "#e1fce6",
                borderRadius: "50px",
                height: "35px",
                width: "35px",
                pt: "9px",
              }}
            >
              <FavoriteBorder sx={{ cursor: "pointer" }} color="success" />
            </IconButton>
            <h4 className="post-bottom-text">2 Likes</h4>
          </Box>
          <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
            <h4 className="post-bottom-text">1 Comment</h4>
            <IconButton
              aria-label="comment-post"
              sx={{
                backgroundColor: "#F0F0F0",
                borderRadius: "50px",
                height: "35px",
                width: "35px",
                pt: "5px",
                ml: "3px",
              }}
            >
              <MoreHoriz
                className="post-comment-icon"
                sx={{ cursor: "pointer", color: "#333333" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
