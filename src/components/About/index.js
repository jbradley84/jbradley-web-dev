import React from "react";
import impressionist from "../../assets/images/impressionist.png";

function About() {
   return (
      <section>
         <h2>about me.</h2>
         <img src={impressionist} alt="An impressionist styled selfie with a forested background" />
         <p>
         hey there! i'm brad, a full stack capable web developer with a 
         strong background in corporate and retail sales, and extensive 
         experience in data-driven analytics. proven both as a leader and 
         collaborator, i'm a natural creative with a knack for outside-the
         -box problem solving. let’s design something great together!
         </p>
      </section>
   )
}

export default About;