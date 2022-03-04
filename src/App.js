import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/coursedetails" exact element={<CourseDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
