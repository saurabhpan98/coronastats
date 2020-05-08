import React from 'react';
import Doctors from '../assets/doctor.svg';
import Tiredness from '../assets/tiredness.png';
import Fever from '../assets/fever.png';
import Cough from '../assets/cough.png';
import CoverCough from '../assets/cover cough.svg';
import Calling from '../assets/calling.svg';
import WashHands from '../assets/wash hands.svg';
import SocialDistancing from '../assets/social distancing.svg';
import StayHome from '../assets/stay home.svg';
import Stats from './stats';

const Home = () =>{
    return (
        <div className = "Home">
            <div className = "container">
                <div className = "row py-5 mt-4 home-top">
                    <div className = "col-sm-7 text-left">
                        <h1>COVID-19 Statistics</h1>
                        <p className = "lead">
                            COVID-19 aka. Coronavirus is the worldwide pandemic. 
                            So all you need is stay at home to be safe.
                        </p>
                        
                    </div>
                    <div className = "col-sm-5">
                        <img src = { Doctors } height = "80%" width = "80%" alt = "Doctors" />
                    </div>
                </div>
            </div>
            <div className = "container pb-5">
                <Stats />
                <div className = "mt-5 pt-2 symptoms">
                    <h5 className = "text-left w-100 font-weight-bold">Common symptoms</h5>
                    <div className = "row mt-4">
                        <div className = "col-4 p-2">
                            <div className = "shadow p-2 text-center">
                                <img src = { Fever } alt = "Fever" />
                                <span className = "d-block mt-2">Fever</span>
                            </div>    
                        </div>
                        <div className = "col-4 p-2">
                            <div className = "shadow p-2 text-center">
                                <img src = { Tiredness } alt = "Tiredness" />
                                <span className = "d-block mt-2">Tiredness</span>
                            </div>    
                        </div>
                        <div className = "col-4 p-2">
                            <div className = "shadow p-2 text-center">
                                <img src = { Cough } alt = "Cough" />
                                <span className = "d-block mt-2">Dry cough</span>      
                            </div>    
                        </div>
                    </div>
                </div>
                <div className = "mt-5 pt-2 preventions">
                    <h5 className = "text-left w-100 font-weight-bold">Preventions</h5>
                    <div className = "row mt-4">
                        <div className = "col-sm-4 p-2">
                            <div className = "shadow p-2 py-3 d-flex">
                                <img src = { StayHome } alt = "Stay home" />
                                <div className = "text-left ml-3">
                                    <strong className = "d-block">Stay home</strong>
                                    <p>All you need is stay at home to defeat corona</p>
                                </div>
                            </div>    
                        </div>
                        <div className = "col-sm-4 p-2">
                            <div className = "shadow p-2 py-3 d-flex">
                                <img src = { SocialDistancing } alt = "Safe distance" />
                                <div className = "text-left ml-4">
                                    <strong className = "d-block">Social distancing</strong>
                                    <p>Maintain a safe distance from anyone who is coughing or sneezing</p>
                                </div>
                            </div>    
                        </div>
                        <div className = "col-sm-4 p-2">
                            <div className = "shadow p-2 py-3 d-flex">
                                <img src = { WashHands } alt = "Wash hands" /> 
                                <div className = "text-left ml-4">
                                    <strong className = "d-block">Wash hands</strong>
                                    <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-sm-2">
                            
                        </div>
                        <div className = "col-sm-4 p-2">
                            <div className = "shadow p-2 py-3 d-flex">
                                <img src = { CoverCough } alt = "Cover cough" />
                                <div className = "text-left ml-3">
                                    <strong className = "d-block">Cover your cough</strong>
                                    <p>Cover nose & mouth with your elbow or a tissue when you cough</p>
                                </div>
                            </div>    
                        </div>
                        <div className = "col-sm-4 p-2">
                            <div className = "shadow p-2 py-3 d-flex">
                                <img src = { Calling } alt = "Calling" />
                                <div className = "text-left ml-3">
                                    <strong className = "d-block">Call helpline</strong>
                                    <p>Seek medical attention if feeling unwell.</p>
                                </div>
                            </div>    
                        </div>
                        <div className = "col-sm-2">
                            
                        </div>
                    </div>
                </div>
            </div>
            <p className = "text-center">Made by Saurabh Panchal, 2020</p>
        </div>
    )
}

export default Home 