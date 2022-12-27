import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import { store } from "./store";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* AuthRoutes */}
          <Route
            element={<ProtectedRoute isProtected={false} redirectPath="/" />}
          >
            <Route path="/login" element={<LoginScreen />} />
          </Route>
          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoute isProtected redirectPath="/login" />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
