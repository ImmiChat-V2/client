import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { LoginScreen, Home } from "@screens";
import { ProtectedRoute, OnLoad } from "@/features/auth/components";

function App() {
  return (
    <Provider store={store}>
      <Router>
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
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
