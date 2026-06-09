import "./App.css";

import {
  ReactCard,
  JavaScriptCard,
  PythonCard,
  CCard,
  CPPCard,
} from "./CourseCard";

function App() {
  return (
    <div className="container">
      <h1>Course Catalog</h1>

      <div className="course-grid">
        <ReactCard />
        <JavaScriptCard />
        <PythonCard />
        <CCard />
        <CPPCard />
      </div>
    </div>
  );
}

export default App;