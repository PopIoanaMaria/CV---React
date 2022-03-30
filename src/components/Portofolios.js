import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Portofolios.css';

function Portofolios() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
   
      axios({
        method: 'get',
        url: `https://api.github.com/users/PopIoanaMaria/repos`
      }).then((res) =>{
          setRepos(res.data);
      });
  
  }, []);
 
  console.log(repos);

  return (
  <>
    <div className='portofolios-about'>
      <h4>Total Projects github : {repos.length}</h4>
      <h5>Repositories:</h5>
    </div>
    <div className='portofolios-container'>
      <div className='contact'>
          <div className='portofolios-pozition'>
              <ul>
                {repos.map(p => (
                    <li key={p.id}> 
                      <h5><a target='_blank' href={`${p.html_url}`}> {p.name} </a></h5>
                        <p>with mostly <span>{p.language} </span></p>
                        <p>Created at : {p.created_at}</p>
                        <hr></hr>
                    </li>
                  
                ))}
              </ul>
          </div>
      </div>
    </div>
  </>
  )
}
export default Portofolios;