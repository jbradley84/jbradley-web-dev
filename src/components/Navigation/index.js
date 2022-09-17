import React from "react";

function Navigation(props) {
   const categories = [
      {
         name: "about me."
      },
      {
         name: "portfolio."
      },
      {
         name: "contact."
      },
      {
         name: "resume."
      }
   ];

   function categorySelected(name) {
      console.log(`${name} clicked`)
   }

   return (
      <nav>
         <ul>
            {categories.map((category) => (
               <li
               className="mx-1"
               key={category.name}
            >
               <span onClick={() => categorySelected(category.name)} >
                  {category.name}
               </span>
            </li>
            ))}
         </ul>
      </nav>
   )
}

export default Navigation;