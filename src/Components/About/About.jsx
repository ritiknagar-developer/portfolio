import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from '../../assets/about_profile.svg'
// import rnImage from '../../assets/rn.jpg';
import rnImage from "../../assets/rn.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={rnImage} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi! I am Ritik Kumar Nagar, a dedicated MERN Stack Developer with a
              strong passion for web development and technology. With experience
              in both front-end and back-end technologies, I specialize in
              creating responsive and efficient web applications. My expertise
              includes working with modern frameworks like React.js, Node.js,
              and Express.js, and I enjoy bringing innovative ideas to life. I
              am always eager to learn new technologies and improve my skills.
              My goal is to build high-quality applications that provide great
              user experiences. If you are looking for a developer who is
              enthusiastic about coding and problem-solving, feel free to reach
              out to me!
            </p>
            <p>
              My passion for MERN Stack Developer is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          
          <div className="about-skills">
     
            <div className="about-skill">  
             
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+ </h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
