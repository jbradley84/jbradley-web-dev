import React, { useState } from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
   const [categories] = useState([
      { name: "About Me" },
      { name: "Portfolio" },
      { name: "Contact" },
      { name: "Resume" }
   ]);

   const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header>
         <Navigation
         categories={categories}
         setCurrentCategory={setCurrentCategory}
         currentCategory={currentCategory}
         ></Navigation>
      </Header>
      <main>
         <div>
            {currentCategory === categories[0] && <About></About>}
            {currentCategory === categories[1] && <Project></Project>}
            {currentCategory === categories[2] && <Contact></Contact>}
            {currentCategory === categories[3] && <Resume></Resume>}
         </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
