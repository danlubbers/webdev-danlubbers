import React from 'react'
// Screenshots
import ArcDesk from '../../images/arc-clone-desktop.gif'
import ArcMobile from '../../images/arc-clone-mobile.png'
import RuffDesk from '../../images/ruffdoggies.gif'
import SunnyRa from '../../images/sunny-ra-website-apple-devices-2019.png'
import Hangman from '../../images/hangman.png'

const Projects = () => {
        return(
            <div className='projects-container'>
                 <h1 className='sunny-project-text'>CLIENT PORTFOLIO SITE</h1>
                    <h2 className='sunny-text'>ARTIST SUNNY RA</h2>
                    <p className='sunny-tech'>Tech used: 
  React | HTML | Sass | Javascript | Redux | React Helmet | PostgresSQL | Digital Ocean | Google Analytics
                </p>
                <section>
                <h3>DETAILS OF PROJECT :</h3>
                    <p>*UPDATE* Refactored code Aug. 2019 to cut out 75% of static code and converted it over to a SQL database and hosting on Digital Ocean. </p>
                    <p>
                    Client/Artist, Sunny Ra wanted a complete redesign of her portfolio site. I created the wireframe and designed the layout and color scheme. I photographed her portrait for the 'About' section. I then built her site using Reactjs. I made the site fully responsive using Media Queries in SASS. I used React Helmet so google would be able to crawl her site searching for keywords helping SEO (Seach Engine Optimization). I added Google Analytics so Sunny can track her traffic going to her new site.  
                    </p>
                    <a href='https://github.com/danlubbers/sunny-ra.com' target='_blank' rel="noopener noreferrer">GITHUB REPO</a>
                    <div className='screenshots'>
                   <a href='http://www.sunny-ra.com' target='_blank' rel="noopener noreferrer"><img className='sunny-desk' src={SunnyRa} alt='sunny ra portfolio site shown on different devices'/></a>
                    </div>
                </section>

                <h1 className='personal-project-text'>AlbanyCanCode: PERSONAL PROJECT</h1>
                <h2 className='hangman-text'>HANGMAN</h2>
                <p className='hangman-tech'>TECH USED: Javascript | Node | Readline-Sync
                </p>
                <section>
                    <h3>DETAILS OF PROJECT :</h3>
                    <p>Using only Javascript & Node I built a hangman game and exceeded the requirements by adding extra functionality to the game as well as a visual graphic of the hangman character.</p>
                    <h3>Instructions:</h3>
                        <ul>
                            <li>Words are chosen at random.</li>
                            <li>Only the letters A - Z will be accelited.</li>
                            <li>The user will get 6 incorrect guesses before that round is over.</li>
                            <li>A dulilicate incorrect guess will not count against the user.</li>
                            <li>Each round will start automatically after the first round is finished.</li>
                            <li>The user can quit at any time by typing CTRL-C.</li>
                        </ul>
                    <a href='https://github.com/danlubbers/hangman' target='_blank' rel="noopener noreferrer">GITHUB REPO</a>
                    <p>
                        <a className='hangman-project-requirements' href='https://github.com/AlbanyCanCodeCourses/JavaScriptFundamentals2019/blob/master/docs/Project1Description.md' target='_blank' rel="noopener noreferrer">Click for Project Requirements</a>
                    </p>
                    <div className='screenshots'>
                    <a href='https://github.com/danlubbers/hangman' target='_blank' rel="noopener noreferrer"><img className='hangman-graphic' src={Hangman} alt='hangman'/></a>

                    </div>
                </section>

                <h1 className='personal-project-text'>DevMtn: PERSONAL PROJECT</h1>
                <h2 className='arc-clone-text'>ARC'TERYX LEAF CLONE </h2>
                <p className='arc-tech'>TECH USED: React | Sass | Javascript 
                    | Redux | Node | PostgresSQL | Hover | Digital Ocean
                </p>
                <section>
                    <h3>DETAILS OF PROJECT :</h3>
                    <p>
                        I chose to clone an e-commerce site. Cloning this site allowed me to showcase that I can take a design and recreate the layout into a full functioning site. I used CSS3/SASS for all of the styling and to make the design mobile responsive for iphone 6, 7, 8 and desktop. I used React.js to build the site with the use of Javascript along with Redux to manage the "state." I used PostgreSQL and Heroku for database management of the products. The Domain is registered and maintained through Hover and the site is hosted on Digital Ocean.
                    </p>
                    <a href='https://github.com/danlubbers/arcteryx-clone' target='_blank' rel="noopener noreferrer">GITHUB REPO</a>
                    <div className='screenshots'>
                   <a href='http://arcteryxclone.danlubbers.com' target='_blank' rel="noopener noreferrer"><img  className='arc-desk' src={ArcDesk} alt='arcteryx clone desktop screenshot'/></a>
                   <a href='http://arcteryxclone.danlubbers.com' target='_blank' rel="noopener noreferrer"><img  className='arc-mobile' src={ArcMobile} alt='arcteryx clone mobile screenshot'/></a>
                    </div>
                </section>

                  <h1 className='group-project-text'>DevMtn: GROUP PROJECT</h1>
                <h2 className='ruff-clone-text'>RUFFWEAR CLONE </h2>
                <p className='ruff-tech'>TECH USED: React | Sass | Javascript 
                    | Redux | Node | PostgresSQL | Hover | Digital Ocean
                </p>
                <section>
                    <h3>DETAILS OF PROJECT :</h3>
                    <p>
                    Our group wanted to clone an e-commerce site. Cloning this site allowed us to showcase that we can take a design and recreate the layout into a full functioning site. We used CSS3/SASS for all of the styling. We used React.js to build the site with the use of Javascript along with Redux to manage the "state." We used PostgresSQL and Heroku for database management of the products. The Domain is registered and maintained through Hover and the site is hosted on Digital Ocean.
                    </p>
                    <a href='https://github.com/danlubbers/ruffwear-clone' target='_blank' rel="noopener noreferrer">GITHUB REPO</a>
                    <div className='screenshots'>
                   <a href='http://ruffdoggies.danlubbers.com' target='_blank' rel="noopener noreferrer"><img className='ruff-desk' src={RuffDesk} alt='ruffwear clone desktop screenshot'/></a>
                    </div>
                </section>
            </div>
        )
    }

    export default Projects;