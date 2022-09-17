import React from "react";
import Navigation from "../Navigation";

function Header() {
   return (
      <header>
         <h1>
            <a href="/">
               <span>J. Bradley Whittington</span>
            </a>
         </h1>
         <Navigation></Navigation>
      </header>
   );
}

export default Header;
