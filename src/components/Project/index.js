import React, { useState } from "react";
import tappThat from "../../assets/images/tappthat.png";
import awkward from "../../assets/images/awkward-party-pal.png";
import pwaText from "../../assets/images/pwa-text-editor.gif";
import ecommBack from "../../assets/images/e-comm-back-end.gif";
import weather from "../../assets/images/weather-dashboard.png";
import randomPass from "../../assets/images/random-password-generator.png";


const Portfolio = () => {
   const [projects] = useState([
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
         name: "PWA Text Editor",
         imgsrc: pwaText,
         link: "https://young-sands-78297.herokuapp.com/",
         repo: "https://github.com/jbradley84/pwa-text-editor"
      },
      {
         name: "E-commerce Back End",
         imgsrc: ecommBack,
         link: "https://drive.google.com/file/d/1Tl40AT4aSGmQ9UumEKjy6t-fPeIqTTPE/view",
         repo: "https://github.com/jbradley84/e-commerce-back-end"
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
   ]);

   return (
      <div>
         <h2>my work.</h2>
         <div>
            {projects.map((project, i) => (
               <div key={i}>
                  <h3>{project.name}</h3>
                  <p>
                     <a href={project.link}>{project.name}</a>
                  </p>
                  <p>
                     <a href={project.repo}>view the repository</a>
                  </p>
                  <img src={project.imgsrc} alt={project.name} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Portfolio;