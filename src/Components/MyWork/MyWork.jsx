import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
  {mywork_data.map((work, index) => {
    return (
      <div key={index}> {/* Key placed correctly */}
        <img src={work.w_img} alt="" />
        <a href={`https://${work.w_name}`} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </div>
    );
  })}
</div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
