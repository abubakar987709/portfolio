import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container">
        {/* Tabs */}
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        {/* Sections */}
        <div className="qualification_sections">
          {/* EDUCATION TAB */}
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            {/* 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">Spain Institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* 2 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Corvit Institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title3">UX Expert</h3>
                <span className="qualification_subtitle3">Spain University <br />2020 - 2021 <br />     <i className="uil uil-calendar-alt"></i> </span>
                <div className="qualification_calender">
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE TAB */}
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            {/* 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Art Director</h3>
                <span className="qualification_subtitle">Creative Agency</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* 2 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Product Designer</h3>
                <span className="qualification_subtitle">
                  Microsoft Spain
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title1">UX Designer</h3>
                <span className="qualification_subtitle1">Apple Inc <br />2022 - 2023 <br />   <i className="uil uil-calendar-alt"></i></span>
                <div className="qualification_calender"> 
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* 4 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title2">Web Designer</h3>
                <span className="qualification_subtitle1">Figma Spain <br /> 2024 - Present <br />   <i className="uil uil-calendar-alt"></i>  </span>
                <div className="qualification_calender">
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
