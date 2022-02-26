import React from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css';

function Main() {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                   <img
                    className='selectedPunk' 
                    src = {'https://i.ytimg.com/vi/4RTte4RA1Sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOdlLEgQtra4DmRSoMZCCCN8mKmw'} 
                    alt = ""
                   />
                </div>
            </div>
        <div 
          className='punkDetails'
          style = {{color : '#fff'}}  
          >
          <div className='title'>Bandana Punk</div>
          <span className='itemNumber'>.#3</span>
        </div>
        <div className='owner'>
            <div className='ownerImageContainer'>
               <img 
                  src = {'https://i.ytimg.com/vi/4RTte4RA1Sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOdlLEgQtra4DmRSoMZCCCN8mKmw'} 
                  alt = ''
                  />
            </div>
            <div className='ownerDetails'>
                <div className='ownerNameAndHandle'>
                   <div>0*64646747773</div>
                   <div className='ownerHandle'>@vermad843</div>
                </div>
                <div className='ownerLink'>
                   <img src = {instagramLogo} alt = ''/>
                </div>
                <div className='ownerLink'>
                   <img src = {twitterLogo} alt = ''/>
                </div>
                <div className='ownerLink'>
                   <img src = {moreIcon} alt = ''/>
                </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Main;