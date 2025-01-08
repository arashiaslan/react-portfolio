import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-globe services__icon"></i>
                    <h3 className="services__title">Web Dev</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More{" "}
                    <i className="uil uil-arrow-right"></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Web Dev</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor,  vel sunt mollitia ipsum fugiat tempora culpa.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor  Expedita, neque quibusdam quidem eveniet iure laborum.</p>
                            </li>
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor  Expedita, neque quibusdam quidem eveniet iure laborum.</p>
                            </li>
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor  Expedita, neque quibusdam quidem eveniet iure laborum.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Graphic<br />Design</h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(2)}>
                    View More{" "}
                    <i className="uil uil-arrow-right"></i>
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Graphic Design</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sunt mollitia ipsum fugiat tempora culpa.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor.</p>
                            </li>
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor sit amet .</p>
                            </li>
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor sit .</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-scenery services__icon"></i>
                    <h3 className="services__title">Illustration</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More{" "}
                    <i className="uil uil-arrow-right"></i>
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Illustration</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quod beatae,tempora culpa.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                            </li>
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor sit.</p>
                            </li>
                            <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services