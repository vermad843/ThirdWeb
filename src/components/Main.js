import React from 'react';

function Main() {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
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
          <span className='itemNumber'></span>
        </div>
    </div>
  )
}

export default Main;