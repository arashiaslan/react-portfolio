import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <div className="about__title">Experience</div>
            <span className="about__subtitle">0.5 Year</span>
        </div>
        <div className="about__box">
            <i class='bx bx-briefcase about__icon' ></i>
            <div className="about__title">Completed</div>
            <span className="about__subtitle">3+ Projects</span>
        </div>
        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
            <div className="about__title">Support</div>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info