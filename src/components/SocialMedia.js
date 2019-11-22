import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaCamera } from 'react-icons/fa';

const SocialMedia = () => (
    <div className='social-media-container-nested'>
      <div className='social-media'>
          <div className='github'>
              <a href='http://github.com/danlubbers' target='_blank' rel="noopener noreferrer" alt='github'><FaGithub/>
              </a>
          </div>
          <div className='linkedin'>
            <a href='http://linkedin.com/in/danlubbers' target='_blank' rel="noopener noreferrer" alt='linkedin'><FaLinkedin />
            </a>
          </div>
          <div className='instagram'>
              <a href='http://instagram.com/danlubbers' target='_blank' rel="noopener noreferrer" alt='instagram'><FaInstagram />
              </a>
          </div>
          <div className='camera'>
              <a href='http://danlubbersphotographs.com' target='_blank' rel="noopener noreferrer" alt='dan lubbers photographs'><FaCamera />
              </a>
          </div>
      </div>
    </div>
  )

export default SocialMedia