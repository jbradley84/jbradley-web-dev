import React from "react";
import Navigation from "../Navigation";

function Header(props) {

   const {
      pages,
      setCurrentPage,
      currentPage,
      setPageSelected,
      pageSelected
   } = props;

   return (
      <header>
         <h1>
            <a href="/">
               <span>j. bradley whittington</span>
            </a>
         </h1>
         <Navigation
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setPageSelected={setPageSelected}
            pageSelected={pageSelected}
         />
      </header>
   );
}

export default Header;
