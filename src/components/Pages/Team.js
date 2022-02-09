import React from 'react';
import team1 from '../../img/team_img/Rectangle 22.png'
import team2 from '../../img/team_img/Rectangle 24.png'
import team3 from '../../img/team_img/Rectangle 27.png'
import team4 from '../../img/team_img/Rectangle 28.png'
import team5 from '../../img/team_img/Rectangle 29.png'
import team6 from '../../img/team_img/Rectangle 30.png'
import team7 from '../../img/team_img/Rectangle 31.png'
import team8 from '../../img/team_img/Ellipse 2.png'

function Team(props) {
    return (
        <div id='Team'>
            <div className='team_imgs'>
                <div className='team_img1 team_img'>
                    <img className='team1 team_num' src={team1} alt="team1"></img>
                </div>
                <div className='team_img2 team_img'>
                    <img className='team2 team_num' src={team2} alt="team1"></img>
                </div>
                <div className='team_img3 team_img'>
                    <img className='team3 team_num' src={team3} alt="team1"></img>
                </div>
                <div className='team_img4 team_img'>
                    <img className='team4 team_num' src={team4} alt="team1"></img>
                </div>
                <div className='team_img5 team_img'>
                    <img className='team5 team_num' src={team5} alt="team1"></img>
                </div>
                <div className='team_img6 team_img'>
                    <img className='team6 team_num' src={team6} alt="team1"></img>
                </div>
                <div className='team_img7 team_img'>
                    <img className='team7 team_num' src={team7} alt="team1"></img>
                </div>
                <div className='team_img8 team_img'>
                    <img className='team8 team_num' src={team8} alt="team1"></img>
                </div>
                
                
                
                
                
                
                
                
                
            </div>
        </div>
    );
}

export default Team;