import React from "react";
import ProjectCard from "./ProjectCard";
import songImage from "../../assets/song-popularity.avif";
import movieImage from "../../assets/movie-recommender.png";
import stickHeroImage from "../../assets/stick-hero.png"; 
import onlineStoreImage from "../../assets/online-store.jpg";
import machineSimulatorImage from "../../assets/machine-simulator.webp";
import shellCraftImage from "../../assets/shell-craft.webp";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-[#f5f5dc] text-black">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="Song popularit/HitTrack"
          main="In this project, I leveraged data collected from the Spotify Web API to predict the popularity of songs based on key features. After obtaining the raw data, I performed extensive preprocessing and feature selection to identify the most relevant parameters influencing song popularity. Using these optimized features, I trained machine learning models to classify whether a song is likely to be popular after its release. The final model achieved an impressive overall accuracy of 78%. The tech stack for this project includes Machine Learning algorithms and concepts, the Spotify Web API for data collection, and various preprocessing and model training techniques to develop an effective predictive system. Developed a machine learning model to predict song popularity using features like danceability, energy, and sentiment analysis of song titles from Spotify's API. Conducted extensive EDA, applied Random Forest, XGBoost, and other models, achieving 78% accuracy"
          repoLink="https://github.com/dhairya22157/Song_Popularity"
          image={songImage}
        />
        <ProjectCard
          title="Movie recommender System"
          main="I developed a Movie Recommender System utilizing Machine Learning principles to suggest personalized movie recommendations to users. The project leverages the TMDB API to fetch high-quality images of the recommended movies, enhancing the user experience. Key features of the project include: Machine Learning Model: Built a robust recommendation engine trained on movie datasets to provide accurate suggestions. Web Deployment: Deployed the system using Flask, ensuring a seamless and interactive user interface accessible via this link.https://movie-recommender8aae.onrender.com Integration with TMDB API: Integrated the TMDB API to dynamically fetch and display movie posters, creating a visually appealing output. This project demonstrates my ability to combine Data Science and web development to build practical and user-friendly applications. It highlights my expertise in deploying ML models and integrating APIs for real world use cases"
          demoLink="https://movie-recommender-8aae.onrender.com/"
          repoLink="https://github.com/dhairya22157/movie-recommender"
          image={movieImage}
        />
        <ProjectCard
          title="Stick Hero game"
          main="In this project, I developed a single-player game using Java, JavaFX, and Object-Oriented Programming (OOP) principles. The game features a tap-to-play mechanic, enhanced by a custom built 2D physics engine for smooth and realistic gameplay. Key aspects of the project include: Leveraging JavaFX to design an intuitive and user-friendly graphical interface, ensuring an engaging gaming experience. Implementing design patterns to create a resilient and maintainable architecture. Utilizing multithreading to manage concurrent processes for seamless performance. Applying OOP principles to ensure modularity, scalability, and clean code structure. This project highlights the integration of core Java concepts and advanced UI/UX design to deliver a dynamic and interactive gaming application."
          repoLink="https://github.com/dhairya22157/Javafx-game"
          image={stickHeroImage}
        />
        <ProjectCard
          title="Online Store"
          main="In this project, I developed a feature-rich e-commerce website by integrating database management principles with a robust backend and frontend framework. The system was designed and implemented using a MySQL-based DBMS, with Python as the primary programming language, alongside React for the frontend and Django for the backend. Key highlights of the project include: Designing and implementing a well-structured schema to handle complex data relationships. Incorporating advanced DBMS features such as OLAP queries, triggers, transactions, and a focus on maintaining integrity constraints and adherence to ACID principles. Developing core functionalities such as product ordering, store management, and inventory control. Creating over 50 database queries and populating a comprehensive dummy database to simulate real-world operations."
          repoLink="https://github.com/dhairya22157/Kartify_E-commerce-Website"
          image={onlineStoreImage}
        />
        <ProjectCard
          title="Artificial Machine simulator"
          main="For a course project on Computer Organization, I developed a simulator using C and compilers, focusing on the fundamental operations of computer systems. The simulator, designed to run on a Linux distribution command line, bridges the gap between user commands and machine-level instructions. Key features of the project include: A simulator that translates user commands into machine code, enabling the computer system to process and execute the instructions effectively. An inbuilt assembler that converts the system's machine-level response back into a user-readable output, ensuring clear communication between the system and the user. This project showcases expertise in systems programming, compiler design, and low-level architecture, with a strong emphasis on practical applications in computer organization."
          repoLink="https://github.com/dhairya22157/Assembler-and-Simulator"
          image={machineSimulatorImage}
        />
        <ProjectCard
          title="ShellCraft - Linux Command Shell Simulator"
          main="As part of the Operating Systems course, I developed a custom Linux shell designed to execute fundamental and basic Linux commands. This project aimed to provide a foundational understanding of shell operations and command-line interfaces. Key features of the project include: Implementation of a custom shell that mimics the behavior of a standard Linux shell, allowing users to execute basic commands seamlessly. Creation of a beginner-friendly environment to help users familiarize themselves with essential command-line operations. Support for core Linux commands, making the shell functional and practical for learning and exploration. This project highlights foundational concepts of operating systems, process management, and user interaction within a command-line interface."
          repoLink="https://github.com/dhairya22157/ShellCraft"
          image={shellCraftImage}
        />
      </div>
    </div>
  );
};

export default Projects;