import reactImg from "./assets/react.svg";
import jsImg from "./assets/js.svg";
import pyImg from "./assets/py.svg";
import cImg from "./assets/c.svg";
import cppImg from "./assets/c++.svg";

function ReactCard() {
  return (
    <div className="card">
      <img src={reactImg} alt="React" className="course-image" />
      <h2>React JS</h2>
      <p><strong>Instructor:</strong> Buvana M</p>
      <p><strong>Duration:</strong> 4 Weeks</p>
      <p><strong>Rating:</strong> 4.0 ⭐</p>
      <p><strong>Fee:</strong> ₹3,999</p>
    </div>
  );
}

function JavaScriptCard() {
  return (
    <div className="card">
      <img src={jsImg} alt="JavaScript" className="course-image" />
      <h2>JavaScript</h2>
      <p><strong>Instructor:</strong> Sugashini K</p>
      <p><strong>Duration:</strong> 3 Weeks</p>
      <p><strong>Rating:</strong> 4.2 ⭐</p>
      <p><strong>Fee:</strong> ₹2,999</p>
    </div>
  );
}

function PythonCard() {
  return (
    <div className="card">
      <img src={pyImg} alt="Python" className="course-image" />
      <h2>Python</h2>
      <p><strong>Instructor:</strong> Karthiban</p>
      <p><strong>Duration:</strong> 8 Weeks</p>
      <p><strong>Rating:</strong> 4.9 ⭐</p>
      <p><strong>Fee:</strong> ₹5,499</p>
    </div>
  );
}

function CCard() {
  return (
    <div className="card">
      <img src={cImg} alt="C Programming" className="course-image" />
      <h2>C Programming</h2>
      <p><strong>Instructor:</strong> Prakash S</p>
      <p><strong>Duration:</strong> 5 Weeks</p>
      <p><strong>Rating:</strong> 4.5 ⭐</p>
      <p><strong>Fee:</strong> ₹3,599</p>
    </div>
  );
}

function CPPCard() {
  return (
    <div className="card">
      <img src={cppImg} alt="C++" className="course-image" />
      <h2>C++ Programming</h2>
      <p><strong>Instructor:</strong> Prakash S</p>
      <p><strong>Duration:</strong> 6 Weeks</p>
      <p><strong>Rating:</strong> 4.8 ⭐</p>
      <p><strong>Fee:</strong> ₹4,499</p>
    </div>
  );
}

export { ReactCard, JavaScriptCard, PythonCard, CCard, CPPCard };