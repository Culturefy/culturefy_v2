import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';

const Leaderboard = ({ location: { pathname } }) => {

    return (
        <PageLayout title="Home">
                    <section class="main-inner-content inner-cont-pt">
                        <ul class="nav rewards-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link " data-bs-toggle="pill" data-bs-target="#my-reward" type="button"
                        aria-selected="true"><a href="/" >My Rewards</a></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#all-team" type="button"
                        aria-selected="false"><a href="allteams" >All Teams</a></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link " data-bs-toggle="pill" data-bs-target="#team-challenge" type="button"
                        aria-selected="false"><a href ="team-challenges" >Team challenges</a></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#leaderboard" type="button"
                        aria-selected="true"><a href ="leaderboard">Leaderboard</a></button>
                </li>
            </ul>

            <div class="tab-pane " id="leaderboard" role="tabpanel">
                        <div class="sec-leaderboard">
                            <div class="leaderboard-wraper">
                                <table class="table ch-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Leaders</th>
                                            <th scope="col">Employee ID</th>
                                            <th scope="col">Date Employed</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Points</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar01.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Albert Flores</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>12342111</p>
                                            </td>
                                            <td>
                                                <p>Jun 2018</p>
                                            </td>
                                            <td>
                                                <p>Male</p>
                                            </td>
                                            <td>
                                                <p>Manager</p>
                                            </td>
                                            <td>
                                                <p>Team Alpha</p>
                                            </td>
                                            <td>
                                                <p>1,214,178</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar02.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Devon Lane</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>43452122</p>
                                            </td>
                                            <td>
                                                <p>Mar 2018</p>
                                            </td>
                                            <td>
                                                <p>Male</p>
                                            </td>
                                            <td>
                                                <p>Manager</p>
                                            </td>
                                            <td>
                                                <p>Team Alpha</p>
                                            </td>
                                            <td>
                                                <p>1,114,978</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar003.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Floyd Miles</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>45324333</p>
                                            </td>
                                            <td>
                                                <p>Oct 2018</p>
                                            </td>
                                            <td>
                                                <p>Male</p>
                                            </td>
                                            <td>
                                                <p>IT</p>
                                            </td>
                                            <td>
                                                <p>Team Charlie</p>
                                            </td>
                                            <td>
                                                <p>1,008,428</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar01.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Albert Flores</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>45656555</p>
                                            </td>
                                            <td>
                                                <p>Jun 2018</p>
                                            </td>
                                            <td>
                                                <p>Male</p>
                                            </td>
                                            <td>
                                                <p>Director</p>
                                            </td>
                                            <td>
                                                <p>Team Beta</p>
                                            </td>
                                            <td>
                                                <p>Private Cash</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar004.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Jenny Wilson</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>45765433</p>
                                            </td>
                                            <td>
                                                <p>Jun 2018</p>
                                            </td>
                                            <td>
                                                <p>Female</p>
                                            </td>
                                            <td>
                                                <p>Encoder</p>
                                            </td>
                                            <td>
                                                <p>Team Charlie</p>
                                            </td>
                                            <td>
                                                <p>1,001,112</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar005.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Cody Fisher</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>12342122</p>
                                            </td>
                                            <td>
                                                <p>Jun 2018</p>
                                            </td>
                                            <td>
                                                <p>Male</p>
                                            </td>
                                            <td>
                                                <p>Security</p>
                                            </td>
                                            <td>
                                                <p>Team Beta</p>
                                            </td>
                                            <td>
                                                <p>888,841</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar006.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Robert Fox</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>12211234</p>
                                            </td>
                                            <td>
                                                <p>May 2020</p>
                                            </td>
                                            <td>
                                                <p>Male</p>
                                            </td>
                                            <td>
                                                <p>Manager</p>
                                            </td>
                                            <td>
                                                <p>Team Alpha</p>
                                            </td>
                                            <td>
                                                <p>42,100</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="user-pro">
                                                    <div class="user-img"><img src="assets-qa/images/avatar007.png"
                                                            alt=""/></div>
                                                    <h2 class="user-nm">Annette Black</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <p>98767585</p>
                                            </td>
                                            <td>
                                                <p>Sep 201 8</p>
                                            </td>
                                            <td>
                                                <p>Female</p>
                                            </td>
                                            <td>
                                                <p>Team Leader</p>
                                            </td>
                                            <td>
                                                <p>Team Alpha</p>
                                            </td>
                                            <td>
                                                <p>30,147</p>
                                            </td>
                                            <td>
                                                <div class="action-box">
                                                    <button class="act-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                                                    <ul class="action-cont dropdown-menu">
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-circle"></i></span> Send
                                                                Points</a></li>
                                                        <li><a href="#"><span><i
                                                                        class="fa-regular fa-envelope"></i></span>
                                                                Message</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <nav aria-label="">
                                    <ul class="pagination lead justify-content-end mt-5">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"><span><i class="fa-solid fa-chevron-left"></i></span> </a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item" aria-current="page">
                                            <a class="page-link" href="#">2</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#"> <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

        </section>
        </PageLayout>
    );
};

Leaderboard.propTypes = {
    location: PropTypes.object.isRequired,
};

export default Leaderboard;
