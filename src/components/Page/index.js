import React from "react";
import About from "../About";
import Portfolio from "../Project";
import Contact from "../Contact";
import Resume from "../Resume";

function Page(props) {

   const { currentPage } = props;
   console.log(props, currentPage);

   const printPage = (arg) => {
      if (arg === "my portfolio") {
         return <Portfolio />;
      } else if (arg === "get in touch") {
         return <Contact />;
      } else if (arg === "my resume") {
         return <Resume />;
      } else {
         return <About />
      }
   };

   return (
      <div>
         {printPage(currentPage)}
      </div>
   );
}

export default Page;