import React, { useState, useRef, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NewNavbar from "./components/NewNavbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { scroller } from "react-scroll";
//import Popup from 'react-popup';
//import Modal from 'react-modal';
// import Work from "./components/Work";
// import Education from "./components/Education";
import alanBtn from "@alan-ai/alan-sdk-web";
function App() {
  const [index, setIndex] = useState(null)
  const alanBtnInstance = useRef(null);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: '058a362f0a211286b9bf01baa5cd47d82e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoProfile') {
            const delay = index ? null : 0
            // Call the client code that will react to the received command
            scroller.scrollTo(`${commandData.faqId}`, {
              duration: 800,
              delay: delay,
              smooth: "easeInOutQuart"
            })
            setIndex(commandData.faqId);
          }
        }
      });
    }
  }, []);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Modal isOpen={true}>
        <InfoModal />
      </Modal> */}
      <NewNavbar />
      <About />
      <Skills />
      <Project />
      <Testimonials />
      <Contact />
    </main>
  )
}
export default App;