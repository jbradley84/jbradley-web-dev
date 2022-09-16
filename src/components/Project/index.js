import React from "react";
import tappThat from "../../assets/images/tappthat.png";
import awkward from "../../assets/images/awkward-party-pal.png";
import weather from "../../assets/images/weather-dashboard.png";
import randomPass from "../../assets/images/random-password-generator.png";


function Project() {
   const projects = [
      {
         name: "TAPP THAT.",
         imgsrc: tappThat,
         link: "https://pour-me-another.herokuapp.com/",
         repo: "https://github.com/jbradley84/pour-me-another"
      },
      {
         name: "Awkward Party Pal",
         imgsrc: awkward,
         link: "https://abbygraves.github.io/awkward-party-pal/",
         repo: "https://github.com/abbygraves/awkward-party-pal"
      },
      {
         name: "Weather Dashboard",
         imgsrc: weather,
         link: "https://jbradley84.github.io/weather-dashboard/",
         repo: "https://github.com/jbradley84/weather-dashboard"
      },
      {
         name: "Random Password Generator",
         imgsrc: randomPass,
         link: "https://jbradley84.github.io/random-password-generator/",
         repo: "https://github.com/jbradley84/random-password-generator"
      }
   ];

   return (
      <div>
         <h2>my work.</h2>
         <div>
            {projects.map((project) => (
               <div key={project.name}>
                  <div
                     style={{ backgroundImage: `url(${project.imgsrc})` }}>
                     <a href={project.link}>{project.name}</a>
                     <a href={project.repo}>view the github repo here</a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Project;