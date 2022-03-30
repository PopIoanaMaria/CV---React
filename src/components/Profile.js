import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';
import ImageProfile from '../images/profile.jpg';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { HiAcademicCap } from "react-icons/si";
import { FcBusinesswoman } from "react-icons/fc";
import { FcCellPhone } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { IoIosStarOutline } from "react-icons/io";

function Profile() {
  console.log("Profile");
  return (
    <div className='card'>

      <div className='card_1'>
        <div className='card-image'>
          <img className='activator' src={ImageProfile} alt="img" />
          <p>Pop Ioana-Maria</p>
          <p>Student at UTCN, 4th year</p> 
        </div>
      </div>

      <div className='card_2'>
        <div className='contact'>
            <h5><b>PERSONAL DETAILS</b></h5>
            <ul className='contact-details'>
              <li><FcCalendar /> <b>Date of birth:</b> 06/10/1999</li>
              <li><IoIosStarOutline /> <b>Nationality</b>: Romanian</li>
              <li><FcBusinesswoman /> <b>Gendrer</b>: Femele</li>
              <li><FcCellPhone /> <b>Telephone</b>: +40 751898386</li>
              <li><SiGmail /> <b>E-mail</b>: <a>popioanamaria6@gmail.com</a></li>
              <li><SiLinkedin /> <b>Linkedin</b>: <a href='https://www.linkedin.com/in/ioana-maria-pop-83ab4b206/' target="_blank">https://www.linkedin.com/in/ioana-maria-pop-83ab4b206/</a> </li>
              <li><SiDiscord /> <b>Discord</b>: ioanapop#0219</li>
              <li><SiGithub /> <b>GitHub</b>: <a href='https://github.com/PopIoanaMaria' target="_blank">https://github.com/PopIoanaMaria</a></li>
              <li><FcHome /> <b>Address</b>: str. Fantanele nr. 7 bloc A ap. 44, 400327, Cluj-Napoca, Romania</li>
            </ul>
        </div>
      
        <div className='contact'>
          <h5><b>ABOUT ME</b></h5>
          <h6><b>EDUCATION AND TRAINING</b></h6>
          <ul>
            <li>2014 – 2018 – Cluj-Napoca </li>
            <li><b>Onisifor Ghibu Theoretical High-School, Math-IT section</b></li>
            <li>Graduate</li>
            <hr></hr>
            <li>2018 – present – Cluj-Napoca </li>
            <li><b>Technical University of Cluj-Napoca, Electronics, Telecommunication and IT</b></li>
            <li>Engineer in electronics, telecom and IT (with a specialization in IT and Telecom)</li>
          </ul>
        </div>

        <div className='contact'>
          <h5><b>PERSONALITY</b></h5>
          <ul>
              <li>Very driven in completing objectives set before me</li>
              <li>Organized, bordering on perfectionism</li>
              <li>Sociable, friendly, involved, eager to help others, patient</li>
          </ul>
        </div >

        <div className='contact'>
          <h5><b>JOB RELATED SKILLS</b></h5>
          <div className='contact-skills'>   
              <ul>
                  <p><b>Front End</b></p>
                  <li>HTML5 (advanced) </li>
                  <li>CSS3 (advanced)</li>
                  <li>Bootstrap (beginner)</li>
                  <li>JavaScript (medium)</li>
                  <li>jQuery (beginner)</li>
                  <li>Material UI (advanced)</li>
                  <li>React (beginner)</li>
                  <li>Next.js (beginner)</li>
              </ul>
              <ul>
                  <p><b>Programming / Scripting</b></p>
                  <li>JAVA (beginner)</li>
                  <li>C/C++ (beginner)</li>
                  <li>SQL (beginner)</li>
                  <li>Matlab (beginner)</li>
                  <li>Node.js (beginner)</li>
              </ul>
              <ul>
                  <p><b>Others</b></p>
                  <li>Git</li>
                  <li>OOP</li>
              </ul>
          </div>
        </div >

        <div className='contact'>
          <h5><b>LANGUAGES</b></h5>
          <h6>Mother tongue(s): Romanian</h6>
          <hr></hr>
          <h6><b>ENGLISH :</b></h6>
          <div className='conatct-languages'>
            <div className='conatct-languages-list'>
                <p><b>UNDERSTANDING</b></p>
                <ul>
                  <li>Listening</li>
                  <li><b>B2</b></li>
                </ul>
                <ul>
                  <li>Reading</li>
                  <li><b>B2</b></li>
                </ul>
            </div>
            <div className='conatct-languages-list'>
                <p><b>SPEAKING</b></p>
                <ul >
                  <li>Spoken production </li>
                  <li><b>B2</b></li>
                </ul>
                <ul>
                  <li>Spoken interaction</li>
                  <li><b>B2</b></li>
                </ul>
            </div>
            <div className='conatct-languages-list'>
                <p><b>WRITING</b></p>
                <ul>
                  <li>Writing</li>
                  <li><b>B1</b></li>
                </ul>
            </div>
          </div>
        </div >





      </div >
        
      </div>
  )
}
export default  Profile;