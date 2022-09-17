import React, { useState } from 'react';
import './App.css';
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

   return (
      <div>
         <Header>
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setPageSelected={setPageSelected}
            pageSelected={pageSelected}
         </Header>
         <main>
            <Page currentPage={currentPage}></Page>
         </main>
         <Footer></Footer>
      </div>
   );
}

export default App;
