import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../common/loadingSpinner";

import CoursesTabContent from "./components/coursesTabContent";

function Home() {
  const [isloading, setIsLoading] = useState(false);
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
        console.log("err:::", err);
        setIsLoading(false);
        setError(err);

      });
  }, []);

  const displayData = () => {
    if (error) {
      // navigate to error route with msg as props
      return <div>Error message</div>;
    }
    if (data !== "") {
      console.log('data', data)
      return (
        <main>
          {/* <WallpaperCarouselSlider /> */}
          <CoursesTabContent coursesTab={data} />
        </main>
      );
    }

    return <LoadingSpinner />;
  };

  return displayData();
}

export default Home;
