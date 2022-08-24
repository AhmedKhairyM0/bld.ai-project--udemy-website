import "./App.css";
import "./components/_media_queries.css";
import CoursesTabContent from "./components/coursesTabContent";

function App() {
  const coursesObj = {
    name: "Python",
    heading: "Python Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Python Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui error provident in, fugit ut aspernatur tenetur nemo illo vitae itaque voluptas corporis ratione odit. Mollitia soluta magnam illum et.",
    courses: [
      {
        id: 4,
        link: "https://www.udemy.com/course/learn-python/",
        title: "Learn Python: Python for Beginners",
        instructor: "Abrar Hussain",
        image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
        price: "319.99",
        old_price: "819.99",
        stars: 4.3,
        views: "2,773",
        category: "Python",
        bestSeller: true,
      },
      {
        id: 5,
        link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
        title: "Python Beyond the Basics - Object-Oriented Programming",
        instructor: "Infinite Skills",
        image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
        price: "519.99",
        old_price: "919.99",
        stars: 4.4,
        views: "2,930",
        category: "Python",
        bestSeller: false,
      },
      {
        id: 6,
        link: "https://www.udemy.com/course/selenium-webdriver-and-python/",
        title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
        instructor: "Admas Kinfu",
        image: "https://img-c.udemycdn.com/course/480x270/482754_7146_6.jpg",
        price: "1,299.99",
        old_price: "1,919.99",
        stars: 4.7,
        views: "1,813",
        category: "Python",
        bestSeller: false,
      },
      {
        id: 7,
        link: "https://www.udemy.com/course/teach-your-kids-to-code/",
        title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
        instructor: "Bryson Payne",
        image: "https://img-c.udemycdn.com/course/480x270/519554_da68_6.jpg",
        price: "319.99",
        old_price: "819.99",
        stars: 4.5,
        views: "8,809",
        category: "Python",
        bestSeller: true,
      },
      {
        id: 8,
        link: "https://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/",
        title: "Python for Data Structures, Algorithms, and Interviews!",
        instructor: "Jose Portilla",
        image: "https://img-c.udemycdn.com/course/480x270/535622_3bc0.jpg",
        price: "1,299.99",
        old_price: "1,919.99",
        stars: 4.5,
        views: "10.701",
        category: "Python",
        bestSeller: false,
      },
      {
        id: 9,
        link: "https://www.udemy.com/course/automate/",
        title: "Automate the Boring Stuff with Python Programming",
        instructor: "Al Sweigart",
        image: "https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg",
        price: "519.99",
        stars: 4.7,
        views: "101,703",
        category: "Python",
        bestSeller: true,
      },
    ],
  };

  return (
    <div className="App">
      <CoursesTabContent coursesTab={coursesObj} />
    </div>
  );
}

export default App;
