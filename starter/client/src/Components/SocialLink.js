import React from 'react';
import socialLinkStyles from '../styles/SocialLinkStyles.module.css'


const SocialLink = ({title, href}) => href && (
    <h2 className={socialLinkStyles.artistInfo}>
      <a target='_blank' rel='noopener noreferrer' href={href}>
             {title}
      </a>
    </h2>
 )

 export default SocialLink