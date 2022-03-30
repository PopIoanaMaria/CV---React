import React from 'react';
import Educations from './Educations';
import Experience from './Experience';
import NavBar from './NavBar';
import Portofolios from './Portofolios';
import Profile from './Profile';
import Skills from './Skills';

function Home() {
  return (
    <section>
        <NavBar />
        <div className='container'>
            <div className='row'>
                <div className='col s12 l3'>
                    <Profile />
                </div>
                <div className='col s12 l9'>
                    <Profile />
                    <Skills />
                    <Experience />
                    <Educations />
                    <Portofolios />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;