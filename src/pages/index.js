import React from 'react'
import Bio from '../components/Bio'
import Skillset from '../components/Skillset'
import Projects from '../components/Projects'
import Header from '../components/Header'
import '../layouts/index.scss';
import Helmet from 'react-helmet';

const IndexPage = () => (
    <div className='app-wrapper'>
        <Helmet>
            <html lang="en" />
            <title>Dan Lubbers | Full Stack Web Developer</title>
            <meta author='Dan Lubbers' />
            <meta name='description' content='Dan Lubbers is a Photographer / Retoucher / Web Developer specializing in Studio and Environmental Portraits in Saratoga Springs, NY.' />
            <meta name='keywords' content='dan lubbers, web, web developer, developer, development, full stack, coder, javascript, react, reactjs, programmer, photographer, photography, photographs, saratoga, springs, ny, new york, louisville, kentucky, ky, fine art, fine art portraiture, editorial, portraits, portraiture, environmental portraits, studio, product, people, emotion, passion, adventure, action, lifestyle, scenic, landscape, iphoneography, music, musicians, will, oldham, jim, james, my morning jacket, mmj, bonnie, prince, billy, sport, sports, red river gorge, rock climbing, climbing, climber, rockclimbing, headshots, commercial, cycling, trailrunning, running, athletes, professional, athletic, local' />
        </Helmet>
        
        <div>
          <Header />
            <Bio /> 
        </div>
        <div>
            <Skillset />
        </div>
        <div>
            <Projects />
        </div>
    </div>
  
)

export default IndexPage