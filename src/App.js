//Import React class and useEffect hook
import React, {useEffect} from 'react';
//IMPORT Animation On Scroll
import AOS from 'aos';
//IMPORT Animation On Scroll CSS
import 'aos/dist/aos.css';
//IMPORT App.css
import "./App.css"
//IMPORT Navbar from component folder
import Navbar from './components/navbar'
//IMPORT Section 1 from component folder
import Section1 from './components/section1'
//IMPORT Section 2 from component folder
import Section2 from './components/section2'
//IMPORT Section 3 from component folder
import Section3 from './components/section3'

function App() {
  //Using useEffect to init the AOS
  useEffect(() => {
    console.log("Jalan")
    AOS.init({
      once: true, // Make the animation should happen only once when the user scrolling down
    })
  },[])

  return (
     //Load the page wrapper
     <div className="w-full relative">
        {/* Load the navbar component */}
        <Navbar />
        {/* Load the section1 component */}
        <Section1/>
        {/* Load the section2 component */}
        <Section2/>
        {/* Load the section3 component */}
        <Section3/>
     </div>
  )
}

export default App;
