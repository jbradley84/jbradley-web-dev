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
               <span>J. Bradley Whittington</span>
            </a>
         </h1>
         <Navigation
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setPageSelected={setPageSelected}
            pageSelected={pageSelected}
         ></Navigation>
      </header>
   );
}

export default Header;
