import React from 'react';
import team1 from '../../img/team_img/Rectangle 22.png'
import team2 from '../../img/team_img/Rectangle 24.png'
import team3 from '../../img/team_img/Rectangle 27.png'
import team4 from '../../img/team_img/Rectangle 28.png'
import team5 from '../../img/team_img/Rectangle 29.png'
import team6 from '../../img/team_img/Rectangle 30.png'
import team7 from '../../img/team_img/Rectangle 31.png'
import team8 from '../../img/team_img/Ellipse 2.png'
import backhis from '../../img/Vector.svg'
import { NavLink } from "react-router-dom";
import { FaTelegram, FaInstagram, FaGithub } from 'react-icons/fa';


function Team(props) {
    return (
        <div id='Team'>
            <NavLink
                className="backhistory"
                to="/"
                activeClassName="active"
            >
                <img src={backhis} style={{ marginRight: "10px" }} />
                Orqaga
            </NavLink>
            <div className='team_imgs'>
                <div className='team_img1 team_img'>
                    <img className='team1 team_num' src={team1} alt="team1" />
                    <div className="team_link1 team_link_med">
                        <div className='team_info team_info1'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> 0 Plan</p>
                        </div>
                        <div className="team_icons team_icon-1">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            <a href='#'><FaGithub className='team-icon' /></a>
                        </div>
                    </div>

                </div>
                <div className='team_img2 team_img'>
                    <img className='team2 team_num' src={team2} alt="team1" />
                    <div className="team_link_med">
                        <div className='team_info team_info2'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> A Plan</p>
                        </div>
                        <div className="team_icons team_icon-2">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            {/* <a href='#'><FaGithub className='team-icon' /></a> */}
                        </div>
                    </div>

                </div>
                <div className='team_img3 team_img'>
                    <img className='team3 team_num' src={team3} alt="team1" />
                    <div className="team_link_med">
                        <div className='team_info team_info3'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> B Plan</p>
                        </div>
                        <div className="team_icons team_icon-3">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            {/* <a href='#'><FaGithub className='team-icon' /></a> */}
                        </div>
                    </div>

                </div>
                <div className='team_img4 team_img'>
                    <img className='team4 team_num' src={team4} alt="team1" />
                    <div className="team_link_med">
                        <div className='team_info team_info4'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> C Plan</p>
                        </div>
                        <div className="team_icons team_icon-4">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            <a href='#'><FaGithub className='team-icon' /></a>
                        </div>
                    </div>

                </div>
                <div className='team_img5 team_img'>
                    <img className='team5 team_num' src={team5} alt="team1" />
                    <div className="team_link5 team_link_med">
                        <div className='team_info team_info5'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> D Plan</p>
                        </div>
                        <div className="team_icons team_icon-5">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            {/* <a href='#'><FaGithub className='team-icon' /></a> */}
                        </div>
                    </div>
                </div>
                <div className='team_img6 team_img'>

                    <img className='team6 team_num' src={team6} alt="team1" />
                    <div className="team_link_med">
                        <div className='team_info team_info6'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> E Plan</p>
                        </div>
                        <div className="team_icons team_icon-6">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            <a href='#'><FaGithub className='team-icon' /></a>
                        </div>
                    </div>

                </div>
                <div className='team_img7 team_img'>
                    <img className='team7 team_num' src={team7} alt="team1" />
                    <div className="team_link_med">
                        <div className='team_info team_info7'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> F Plan</p>
                        </div>
                        <div className="team_icons team_icon-7">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            {/* <a href='#'><FaGithub className='team-icon' /></a> */}
                        </div>
                    </div>

                </div>
                <div className='team_img8 team_img'>
                    <img className='team8 team_num' src={team8} alt="team1" />
                    <div className="team_link_med">
                        <div className='team_info team_info8'>
                            <h3 className='team_name'> Name Surname </h3>
                            <p className="team_work"> H Plan</p>
                        </div>
                        <div className="team_icons team_icon-8">
                            <a href='#'><FaTelegram className='team-icon' /></a>
                            <a href='#'><FaInstagram className='team-icon' /></a>
                            {/* <a href='#'><FaGithub className='team-icon' /></a> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Team;