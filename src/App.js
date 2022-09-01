import CoursesTabContent from "./components/coursesTabContent";
import "./App.css";
import coursesData from "./data/courses.json";

function App() {
  return (
    <div className="App">
      <CoursesTabContent coursesTab={coursesData} />
    </div>
  );
}

export default App;
