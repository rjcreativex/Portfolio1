import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/portfolio/brush.png";
import mywork_data from '../../assets/mywork_data';
import right_icon from "../../assets/portfolio/rightarrow.png";

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="Theme Pattern" className="theme_pattern" />
        </div>
            <div className='mywork-container'>
                {mywork_data.map((work, index) => {
                  return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={right_icon} alt="Arrow Icon" className="arrow-icon"/>
            </div>
      </div>
    )
  }
export default MyWork