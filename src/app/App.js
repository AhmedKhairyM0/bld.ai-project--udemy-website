import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home";
import ErrorRoute from "./routes/error/errorRoute";
import NavBar from "./common/navBar";

import "./App.css";
import CourseDetails from './routes/courseDetails/courseDetails';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
