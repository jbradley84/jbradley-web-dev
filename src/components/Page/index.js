import React from 'react';
import About from "../About";
import Portfolio from "../Project";
import Contact from "../Contact";
import Resume from "../Resume";

function Page(props) {

   const { currentPage } = props;

   const printPage = (arg) => {
      if (arg === "Portfolio") {
         return <Portfolio />;
      } else if (arg === "Contact") {
         return <Contact />;
      } else if (arg === "Resume") {
         return <Resume />;
      } else {
         return <About />
      }
   };

   return (
      <section>
         {printPage(currentPage)}
      </section>
   );
}

export default Page;