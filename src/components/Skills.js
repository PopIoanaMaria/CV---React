import React, { useState } from 'react';
import '../styles/Skills.css';
// import Rating from "react-rating";
import { Rating } from '@mui/material';
import { createTheme } from '@mui/material/styles';




const labels = {
  0.5 : 'beginner',
  1 : 'beginner',
  1.5 : 'beginner',
  2 : 'medium',
  2.5 : 'medium',
  3 : 'medium',
  3.5: 'medium',
  4: 'advanced',
  4.5 : 'advanced',
  5 : 'advanced'
}

function Skils() {

  const [value, setValue] = useState(4);
  // const [hover, setHover] = useState();

  return (
    <div className='container-skills'>
      <div className='contact'>
          <h5><b>JOB RELATED SKILLS</b></h5>
          <div className='contact-skills'>   
              <ul>
                  <p><b>Front End</b></p>
                  {/* <div class="Stars" style="--rating: 2.3;" aria-label="Rating of this product is 2.3 out of 5."></div> */}
                  <li>HTML5 (advanced)  <Rating className='ThemeColor' name="size-large" style={{color: '#ffeb3b'}} defaultValue={value} value={4} size="large"/></li>
                  <li>CSS3 (advanced)  <Rating name="size-large" defaultValue={3.5} /></li>
                  <li>Bootstrap (beginner) <Rating name="size-large" defaultValue={2.5} /></li>
                  <li>JavaScript (medium)  <Rating name="size-large" defaultValue={2.5} /></li>
                  <li>jQuery (beginner)  <Rating name="size-large" defaultValue={0.5} /></li>
                  <li>Material UI (advanced)  <Rating name="size-large" defaultValue={3.5} /></li>
                  <li>React (medium)  <Rating name="size-large" defaultValue={2} /></li>
                  <li>Next.js (beginner)  <Rating name="size-large" defaultValue={1} /></li>
              </ul>
              <ul>
                  <p><b>Programming / Scripting</b></p>
                  <li>JAVA (beginner)  <Rating name="size-large" defaultValue={0.5} /></li>
                  <li>C/C++ (beginner)  <Rating name="size-large" defaultValue={2} /></li>
                  <li>SQL (beginner) <Rating name="size-large" defaultValue={2} /></li>
                  <li>Matlab (beginner)  <Rating name="size-large" defaultValue={1.5} /></li>
                  <li>Node.js (beginner)  <Rating name="size-large" defaultValue={0.5} /></li>
              </ul>
              <ul>
                  <p><b>Others</b></p>
                  <li>Git  <Rating name="size-large" defaultValue={3} /></li>
                  <li>OOP  <Rating name="size-large" defaultValue={3} /></li>
              </ul>
          </div>
        </div >
    </div>
  )
}
export default Skils;