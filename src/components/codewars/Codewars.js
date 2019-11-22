import React, { useState, useEffect } from 'react';
import '../codewars/codewars.scss';
import axios from 'axios';
import graphicHeader from '../../assets/codewars-header-graphic.png';
import codewarsLogo from '../../assets/codewars-logo-small.png';

const App = () => {
 
    const [codewarsData, setCodewarsData] = useState({});
    const API = `https://www.codewars.com/api/v1/users/danlubbers`;
    const [error, setError] = useState('');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    // Using Axios with try/catch blocks
    useEffect(() => {
      async function getData() {
        try {
          const res = await axios.get(proxyurl + API)
            setCodewarsData(res.data)  
        } catch (error) {
            setError(error);
          }
      }
        getData();
      }, [API]);

      return (
      <div className="App">
        <section className='codewars-wrapper'>
          <div className='text-wrapper'>
            <a href='https://www.codewars.com/users/danlubbers/' target='_blank' rel="noopener noreferrer">
              <span>
              <img className='graphic-header' src={graphicHeader} alt='header'/>
                <div className='rank-name-wrapper'>
                  {/* Using the short circuit method we check if codewars.ranks is true, then when it is, it will display the nested information I'm wanting to retrieve */}
                  <h2 className='kyu'>{codewarsData.ranks && codewarsData.ranks.overall.name}</h2> 
                  <h2 className='username'>{codewarsData.username}</h2>
                  <h2 className='honor'>{codewarsData.honor}</h2> <img className='codewars-logo' src={codewarsLogo} alt="codewars-logo"/>
                </div>
              </span>
            </a>
          </div>
        </section>
      </div>
    );
  }

export default App;
