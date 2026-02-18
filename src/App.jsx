import './App.css'
import Navbar from './Navbar';
import Course from './Course/Course';
import Footer from './Footer';
function App() {


  return (
    //Wraps the two tag for that use empty open and close tag
    <>
    {/*Self closing tag <tag_name /> */}
      <Navbar /> 
      <Course />
      <Footer/>
    </>
  );
}

export default App
