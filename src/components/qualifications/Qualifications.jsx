import React, { useState } from 'react'
import './qualifications.css'

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualifications section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualifications__container container">
                <div className="qualifications__tabs">
                    <div className={toggleState === 1 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-graduation-cap qualifications__icon"></i>
                        Education
                    </div>
                    <div className={toggleState === 2 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-briefcase-alt qualifications__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualifications__sections">
                    <div className={toggleState === 1 ? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                        <div className="qualifications__data">
                            <div>
                                <h3 className="qualifications__title">Bachelor Degree</h3>
                                <span className="qualifications__subtitle">Software Engineering</span>
                                <div className="qualifications__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024-Now
                                </div>
                            </div>
                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div></div>
                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifications__title">Bachelor Degree</h3>
                                <span className="qualifications__subtitle">Arabic Literature</span>
                                <div className="qualifications__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2024 (Retired)
                                </div>
                            </div>
                        </div>
                        {/* line */}
                        <div className="qualifications__data">
                            <div>
                                <h3 className="qualifications__title">Senior Highschool</h3>
                                <span className="qualifications__subtitle">MA Nurul Hadid</span>
                                <div className="qualifications__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020-2023
                                </div>
                            </div>
                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div></div>
                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifications__title">Junior Highschool</h3>
                                <span className="qualifications__subtitle">SMPIT Ulul Albab</span>
                                <div className="qualifications__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018-2020
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                        <div className="qualifications__data">
                            <div>
                                <h3 className="qualifications__title">Programmer Internship</h3>
                                <span className="qualifications__subtitle">Jakarta</span>
                                <div className="qualifications__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>

                        <div className="qualifications__data">
                            <div></div>
                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifications__title">Google Dev Festival</h3>
                                <span className="qualifications__subtitle">Bogor</span>
                                <div className="qualifications__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                        </div>
                        {/* line */}
                        <div className="qualifications__data">
                            <div>
                                <h3 className="qualifications__title">HTML CSS PHP Mentor</h3>
                                <span className="qualifications__subtitle">IT Extracurricular</span>
                                <div className="qualifications__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualifications__rounder"></span>
                                <span className="qualifications__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications