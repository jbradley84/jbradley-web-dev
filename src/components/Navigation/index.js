import React, { useEffect } from "react";

function Navigation(props) {

   const {
      pages = [],
      setCurrentPage,
      currentPage,
      pageSelected,
      setPageSelected
   } = props;

   console.log(props, currentPage);
   // useEffect(() => {
   //    document.title = currentPage.name;
   // }, [currentPage]);

   return (
      <nav>
         <ul>
            {pages.map((page) => (
               <li className={`${currentPage === page 
                  && pageSelected && 'navActive'}`} key={page}>
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
   );
}

export default Navigation;