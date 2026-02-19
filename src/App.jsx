import './App.css'
import Navbar from './Navbar';

import Footer from './Footer';
import CourseList from './CourseList';

function App() {


  return (
    //Wraps the two tag for that use empty open and close tag
    <>
      {/*Self closing tag <tag_name /> */}
      <div className="container">
        <CourseList/>
      </div>

    </>
  );
}

export default App
