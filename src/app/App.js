import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home";
import ErrorRoute from "./routes/error/errorRoute";
import NavBar from "./common/navBar";

import "./App.css";
import CourseDetails from './routes/courseDetails/courseDetails';
import Footer from "./common/footer";

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
