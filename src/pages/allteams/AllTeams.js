import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';

const AllTeams = ({ location: { pathname } }) => {

    return (
        <PageLayout title="Home">
                    <section class="main-inner-content inner-cont-pt">
            <ul class="nav rewards-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link " data-bs-toggle="pill" data-bs-target="#my-reward" type="button"
                        aria-selected="true"><a href="/" >My Rewards</a></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#all-team" type="button"
                        aria-selected="false"><a href="allteams" >All Teams</a></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#team-challenge" type="button"
                        aria-selected="false"><a href ="team-challenges" >Team challenges</a></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#leaderboard" type="button"
                        aria-selected="false"><a href ="leaderboard">Leaderboard</a></button>
                </li>
            </ul>


                    <div class="tab-pane " id="all-team" role="tabpanel">
                        <div class="team-sec">
                            <div class="team-wraper alpha">
                                <div class="team-txt">
                                    <h2>Team Alpha</h2>
                                    <h3 class="text-red">45.12%</h3>
                                    <p>Earn Rate</p>
                                </div>
                                <div class="team-profile">
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p1.png" alt=""/>
                                        </div>
                                        <p class="name">Mika <span class="verify"><i
                                                    class="fa-sharp fa-solid fa-circle-check"></i></span></p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p2.png" alt=""/>
                                        </div>
                                        <p class="name">Ayaka <span class="verify"><i
                                                    class="fa-sharp fa-solid fa-circle-check"></i></span></p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p3.png" alt=""/>
                                        </div>
                                        <p class="name">James <span class="verify"><i
                                                    class="fa-sharp fa-solid fa-circle-check"></i></span></p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p4.png" alt=""/>
                                        </div>
                                        <p class="name">Jason </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p5.png" alt=""/>
                                        </div>
                                        <p class="name">Jenny </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p6.png" alt=""/>
                                        </div>
                                        <p class="name">George </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p7.png" alt=""/>
                                        </div>
                                        <p class="name">Nud </p>
                                    </div>
                                </div>
                                <button class="play-btn"><img src="assets-qa/images/play-icon.svg" alt=""/></button>
                            </div>
                            <div class="team-wraper beta">
                                <div class="team-txt">
                                    <h2>Team Beta</h2>
                                    <h3 class="text-prim">28.44%</h3>
                                    <p>Earn Rate</p>
                                </div>
                                <div class="team-profile">
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p8.png" alt=""/>
                                        </div>
                                        <p class="name">Benjamin</p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p9.png" alt=""/>
                                        </div>
                                        <p class="name">Bilan</p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p10.png" alt=""/>
                                        </div>
                                        <p class="name">Ju </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p11.png" alt=""/>
                                        </div>
                                        <p class="name">Steve </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p1.png" alt=""/>
                                        </div>
                                        <p class="name">Mika <span class="verify"><i
                                                    class="fa-sharp fa-solid fa-circle-check"></i></span></p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p5.png" alt=""/>
                                        </div>
                                        <p class="name">Jenny </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p6.png" alt=""/>
                                        </div>
                                        <p class="name">George </p>
                                    </div>
                                </div>
                                <button class="play-btn"><img src="assets-qa/images/play-icon.svg" alt=""/></button>
                            </div>
                            <div class="team-wraper charlie">
                                <div class="team-txt">
                                    <h2>Team Charlie</h2>
                                    <h3 class="text-yellow">26.44%</h3>
                                    <p>Earn Rate</p>
                                </div>
                                <div class="team-profile">
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p10.png" alt=""/>
                                        </div>
                                        <p class="name">Ju</p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p5.png" alt=""/>
                                        </div>
                                        <p class="name">Jenny</p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p8.png" alt=""/>
                                        </div>
                                        <p class="name">Benjamin </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p6.png" alt=""/>
                                        </div>
                                        <p class="name">George </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p9.png" alt=""/>
                                        </div>
                                        <p class="name">Bilan</p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p11.png" alt=""/>
                                        </div>
                                        <p class="name">Steve </p>
                                    </div>
                                    <div class="profile">
                                        <div class="img">
                                            <img src="assets-qa/images/p1.png" alt=""/>
                                        </div>
                                        <p class="name">Mika <span class="verify"><i
                                                    class="fa-sharp fa-solid fa-circle-check"></i></span> </p>
                                    </div>
                                </div>
                                <button class="play-btn"><img src="assets-qa/images/play-icon.svg" alt=""/></button>
                            </div>
                            <div class="team-btns">
                                <a data-bs-toggle="modal" data-bs-target="#exampleModal-1">
                                    <button><img src="assets-qa/images/plus-circle.svg" alt="" /><span>Add
                                            Team</span></button></a>
                                <button>Remove Team</button>
                            </div>
                        </div>
                    </div>
        </section>
        </PageLayout>
    );
};

AllTeams.propTypes = {
    location: PropTypes.object.isRequired,
};

export default AllTeams;
