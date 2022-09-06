import "./App.css";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import NotMatchRoute from "./routes/notMatchRoute";
import { useEffect, useState } from "react";
import Home from "./routes/home";
import { CoursesProvider } from "./contexts/coursesContext";
import LoadingSpinner from "./components/loadingSpinner";

function App() {
  const [response, setResponse] = useState({
    isLoading: false,
    data: "",
    error: "",
  });

  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState("");
  // const [error, setError] = useState("");

  useEffect(() => {
    setResponse({...response, isLoading: true,});
    fetch("http://localhost:4000/tabs")
      .then((response) => response.json())
      .then((result) => {
        // setIsLoading(false);
        // setData(result);
        setResponse({...response, isLoading: false, data: result});
      })
      .catch((err) => {
        console.log("err:::", err);
        setResponse({...response, isLoading: false, error: "Something is wrong"});
        // setIsLoading(false);
        // setError("Something is wrong");
      });
  }, []);

  const displayData = () => {
    console.log('response', response)
    if (response.isLoading === true) return <LoadingSpinner />;
    if (response.error) return <div>{response.error}</div>;

    return (
      <>
        <NavBar></NavBar>
        <CoursesProvider value={{ data: response.data }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotMatchRoute />} />
          </Routes>
        </CoursesProvider>
      </>
    );
  };

  return <div className="App">{displayData()}</div>;
}

export default App;
