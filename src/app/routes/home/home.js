import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../common/loadingSpinner";

import CoursesTabContent from "./components/coursesTabContent";

function Home() {

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
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err:::", err);
        setResponse({
          ...response,
          isLoading: false,
          error: "Something is wrong",
        });
        console.log("response", response);
      });
  }, []);

  const displayData = () => {
    if (response.error) {
      // navigate to error route with msg as props
      return <div>Error message</div>;
    }
    if (response.data) {
      return (
        <main>
          {/* <WallpaperCarouselSlider /> */}
          <CoursesTabContent coursesTab={response.data[0]} />
        </main>
      );
    }

    return <LoadingSpinner />;
  };

  return displayData();
}

export default Home;
