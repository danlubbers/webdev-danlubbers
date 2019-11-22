import React from 'react'
import Bio from '../components/Bio'
import Skillset from '../components/Skillset'
import Projects from '../components/Projects'
import Header from '../components/Header'
import '../layouts/index.scss';

const IndexPage = () => (
    <div>
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