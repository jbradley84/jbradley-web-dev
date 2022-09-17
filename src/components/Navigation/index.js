import React from "react";

function Navigation(props) {

   const {
      pages = [],
      setCurrentPage,
      currentPage,
      setPageSelected,
      pageSelected
   } = props;

   return (
      <nav>
         <ul>
            {pages.map((page) => (
               <li className={`${currentPage === page 
                  && pageSelected && 'navActive'}`} key={page.name}>
               <span onClick={() => { 
                  setCurrentPage(page);
                  setPageSelected(true);
                  }}>
                  {page}
               </span>
            </li>
            ))}
         </ul>
      </nav>
   )
}

export default Navigation;