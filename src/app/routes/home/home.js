import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../common/loadingSpinner";

import CoursesTabContent from "./components/coursesTabContent";
import ErrorRoute from '../error/errorRoute';
import Header from "./components/header";

function Home() {
  const [, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    setIsLoading(true);
    setError("");
    fetch("http://localhost:3001/courses")
      .then((response) => response.json())
      .then((result) => {

        setIsLoading(false);
        setData(result);

      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);

      });
  }, []);

  const displayData = () => {
    if (error) {
      return <ErrorRoute />;
    }
    if (data !== "") {
      return (
        <main>
          <Header />
          <CoursesTabContent coursesTab={data} />
        </main>
      );
    }

    return <LoadingSpinner />;
  };

  return displayData();
}

export default Home;
