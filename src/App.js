import CoursesTabContent from "./components/coursesTabContent";
import "./components/_media_queries.css";
import * as coursesData from "./data/courses.json";

function App() {
  return (
    <div className="App">
      <CoursesTabContent coursesTab={coursesData} />
    </div>
  );
}

export default App;
