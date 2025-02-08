import React, { useEffect, useState } from 'react';

const RecommendationSection = ({recommendations}) => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => { setWindowWidth(window.innerWidth) };
  useEffect(() => { window.addEventListener('resize', handleResize) });


  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>
    <div id="recomnd">
      {recommendations.map((rec, index) => (
        <div key={index} style={ windowWidth < 1024 ?   
        {padding: '8px 20px', backgroundColor: 'white', borderTopLeftRadius: index === 0 ? '15px' : '0', borderTopRightRadius: index === 0 ? '15px' : '0', borderBottomLeftRadius: index === 3 ? '15px' : '0', borderBottomRightRadius: index === 3 ? '15px' : '0' }
        :{padding: '8px 20px', backgroundColor: 'white', borderTopLeftRadius: index === 0 ? '15px' : '0', borderBottomLeftRadius: index === 0 ? '15px' : '0', borderTopRightRadius: index === 3 ? '15px' : '0', borderBottomRightRadius: index === 3 ? '15px' : '0' }}>
          <div>
            <h4 id="titlercmnd">{rec.title}</h4>
            <span id="rcmndtext">بر اساس سلیقه شما</span>
          </div>
          <div style={{ gap: '0.5px', backgroundColor: 'hsl(0, 0%, 84%)', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', alignItems: 'center' }}>
            {rec.images.map((image, imgIndex) => (
              <a key={imgIndex} style={{ backgroundColor: 'white', padding: '8px' }}>
                <img src={image} alt={rec.title} style={{ maxWidth: '100%' }} />
              </a>
            ))}
          </div>
          <a href="#" id="moshahede">&lt; مشاهده</a>
        </div>
      ))}
    </div>
  </div>);
};

export default RecommendationSection;