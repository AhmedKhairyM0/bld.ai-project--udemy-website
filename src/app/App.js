import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./routes/home/home";
import NotMatchRoute from "./routes/error/errorRoute";
import NavBar from "./common/navBar";
import LoadingSpinner from "./common/loadingSpinner";
import { CoursesProvider } from "./contexts/coursesContext";

import "./App.css";

function App() {
  const [response, setResponse] = useState({
    isLoading: false,
    data: "",
    error: "",
  });

  useEffect(() => {
    setResponse({ ...response, isLoading: true });
    fetch("http://localhost:3001/tabs")
      .then((response) => response.json())
      .then((result) => {
        setResponse({ ...response, isLoading: false, data: result });
      })
      .catch((err) => {
        console.log("err:::", err);
        setResponse({
          ...response,
          isLoading: false,
          error: "Something is wrong",
        });
      });
  }, []);

  const displayData = () => {
    console.log("response", response);
    if (response.isLoading === true) return <LoadingSpinner />;
    if (response.error) return <div>{response.error}</div>;
    if (response.data)
      return (
        <>
          <NavBar></NavBar>
          <CoursesProvider value={{ data: response.data }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/course/:id" element={<Home />} />
              <Route path="*" element={<NotMatchRoute />} />
            </Routes>
          </CoursesProvider>
        </>
      );

    return <></>;
  };

  return <div className="App">{displayData()}</div>;
}

export default App;
