import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import "./global.css";
import OurServices from "./Components/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "../public/assets/scss/custom.css";
import { useState } from "react";
function App() {
  const [userstate, setUserState] = useState({});
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<OurServices />} />
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route
            path="/profile"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
        </Routes>


      </div>
      <Footer />
    </Router>
  );
}

export default App;
