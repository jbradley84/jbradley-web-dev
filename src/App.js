import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {

   const [pages] = useState([
      "about me",
      "my portfolio",
      "get in touch",
      "my resume"
   ]);

   const [currentPage, setCurrentPage] = useState(pages[0]);

   const [pageSelected, setPageSelected] = useState(false);

   console.log(currentPage);

   return (
      <div className="wrapper">
         <Header
            setCurrentPage={setCurrentPage}
            pages={pages}
            pageSelected={pageSelected}
            setPageSelected={setPageSelected}
            currentPage={currentPage}
         />
         <main>
            <Page currentPage={currentPage} />
         </main>
         <Footer />
      </div>
   );
}

export default App;
