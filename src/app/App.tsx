// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/store";
// import { Home, LoginScreen, ProfilePage } from "screens";
// import { ProtectedRoute, OnLoad } from "features/auth/components";
import ChatMessage from "features/chat/components/ChatMessage";
import { profilePic } from "shared/Mocks/Mocks";
const media = "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=1380&t=st=1673899044~exp=1673899644~hmac=22cb3e30084ebd126dabce49eb2c202e0f5e93aaea44e2c657fd7775d6818948"
const App = () => {
  return (
    <Provider store={store}>
      <ChatMessage content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus, velit nec dignissim eleifend, lectus sem molestie erat, nec maximus felis justo nec odio. Etiam aliquet tempor erat, et gravida nunc lobortis in. Proin vitae dolor sapien. Praesent a vestibulum velit, et sollicitudin risus. Integer lacinia suscipit dapibus. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ipsum nisl, maximus ut tellus vitae, molestie convallis ante. Sed et diam lectus. Phasellus sollicitudin risus eu suscipit lobortibero quis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum dapibus eros quis dolor venenatis, eu efficitur ipsum vehicula. Quisque pellentesque sit amet sapien at pharetra. Phasellus ut massa consequat, tincidunt arcu ut, laoreet risus. Aenean volutpat augue sed massa auctor, eu hendrerit lorem posuere." avatar= {profilePic} isAuthUser = {true} media = {media}/>
      {/* <Router>
        <Routes>
          <Route element={<OnLoad />}>
            <Route
              element={<ProtectedRoute isProtected={false} redirectPath="/" />}
            >
              <Route path="/login" element={<LoginScreen />} />
            </Route>
            <Route
              element={<ProtectedRoute isProtected redirectPath="/login" />}
            >
              <Route path="/" element={<Home />} />
            </Route>
            <Route
              element={<ProtectedRoute isProtected redirectPath="/profile" />}
            >
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </Router> */}
    </Provider>
  );
};

export default App;
