import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/portfolio/brush.png";
import services_data from "../../assets/services_data";
import right_icon from "../../assets/portfolio/rightarrow.png";
import { CodepenOutlined } from "@ant-design/icons";

const Services = () => (
  <div id='services' className="services">
    <div className="services-title">
      <h1>My Services</h1>
      <img src={theme_pattern} alt="Theme Pattern" className="theme_pattern" />
    </div>

    <div className="services-container">
      {services_data.map((service) => (
        <div key={service.s_no} className="services-format">
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <div className="icon-container">
          <CodepenOutlined/>
          </div>
          <p>{service.s_desc}</p>
          <div className="service-readmore">
            <p>Read More</p>
            <img src={right_icon} alt="Arrow Icon" className="arrow-icon"/>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
