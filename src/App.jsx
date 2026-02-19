import './App.css'
import Navbar from './Navbar';
import Course from './Course';
import Footer from './Footer';
import HTML from './assets/html.jpeg'
import CSS from './assets/CSS.jpg'
import JS from './assets/js.png'
function App() {


  return (
    //Wraps the two tag for that use empty open and close tag
    <>
      {/*Self closing tag <tag_name /> */}
      <div className="container">
        <Course name="HTML" price="$199" image={HTML} rating={4.5} show={true} />
        <Course name="CSS" price="$150" image={CSS} rating={4.0}  show={true}/>
        <Course name="JavaScript" price="$250" image={JS} rating={5} show={true}/>

      </div>

    </>
  );
}

export default App
