import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';

const Home = ({ location: { pathname } }) => {
	if (pathname !== '/') {
		return null;
	}
	return (
		<PageLayout title="Home">
		<section class="main-inner-content inner-cont-pt">
            <ul class="nav rewards-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#my-reward" type="button"
                        aria-selected="true">My Rewards</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#all-team" type="button"
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


            <div class="reward-sec">
                <div class="tab-content rewards">
                    <div class="tab-pane fade show active" id="my-reward" role="tabpanel">
                        <div class="row mt-4">
                            <div class="col-lg-7">
                                <div class="reward-boxes">
                                    <div class="balance-box">
                                        <div class="box-header">
                                            <span><img src="assets-qa/images/gift-icon.svg" alt=""/></span>
                                            <h2>Balance</h2>
                                        </div>
                                        <div class="content-body">
                                            <h3>14,510 <span>Points</span></h3>
                                            <span class="icon"><img src="assets-qa/images/plus-circle.svg"
                                                    alt=""/></span>
                                        </div>
                                    </div>
                                    <div class="rt-box">
                                        <h2>Recent Transaction</h2>
                                        <div class="points">
                                            <div class="imgbox">
                                                <img src="assets-qa/images/user-1.png" alt=""/>
                                            </div>
                                            <div class="amount">
                                                <h4>Amount</h4>
                                                <div class="dot-lines">
                                                    <span></span>
                                                    <span></span>
                                                    <span class="center"><img src="assets-qa/images/arrows center.svg"
                                                            alt=""/></span>
                                                    <span></span>
                                                    <span class="last"></span>
                                                </div>
                                                <h4>13,500 Points</h4>
                                            </div>
                                            <div class="imgbox">
                                                <img src="assets-qa/images/user-2.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="quick-trx">
                                    <h3>Let's do some quick transactions</h3>
                                    <form class="q-trx-form">
                                        <div class="input-box">
                                            <h5>You Send</h5>
                                            <div class="form-group">
                                                <input type="text" class="form-control" value="5,000"/>
                                                <label>Points</label>
                                            </div>
                                        </div>
                                        <div class="input-box">
                                            <h5>You Send</h5>
                                            <div class="form-group">
                                                <input type="text" class="form-control"/>
                                                <label class="user-input">Name, @username or email</label>
                                                <span class="user-avatar"><img src="assets-qa/images/user-avatar.svg"
                                                        alt=""/></span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <textarea name="" id="" placeholder="Say Something...."
                                                class="form-control"></textarea>
                                        </div>
                                        <button type="submit">Send Now</button>
                                    </form>

                                    <div class="chart">
                                        <img src="assets-qa/images/quick-trx-chart.png" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5">

                                <div class="quick-trx-side">
                                    <div class="header">
                                        <h2>Transactions</h2>
                                        <div class="trx-filter">
                                            <button type="button" class="btn btn-secondary dropdown-toggle trx"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>March 2022</span> <img src="assets-qa/images/arrow-updown.svg"
                                                    alt=""/>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">March 2022</a></li>
                                                <li><a class="dropdown-item" href="#">March 2022</a></li>
                                                <li><a class="dropdown-item" href="#">March 2022</a></li>
                                                <li><a class="dropdown-item" href="#">March 2022</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>AV</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Albini Vjosa</h2>
                                                <p class="date">31 March 2022 at 4:20 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>- 13,500 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>kb</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Kayleigh Bysouth </h2>
                                                <p class="date">28 March 2022 at 1:50 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>-2500 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>Av</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Adayin Vetvendosje</h2>
                                                <p class="date">03 March 2022 at 4:20 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>-1200 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>EC</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Edilson De Carvalho </h2>
                                                <p class="date">03 March 2022 at 4:20 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>-500 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>AV</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Albini Vjosa</h2>
                                                <p class="date">31 March 2022 at 4:20 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>- 13,500 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>kb</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Kayleigh Bysouth </h2>
                                                <p class="date">28 March 2022 at 1:50 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>-2500 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>Av</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Adayin Vetvendosje</h2>
                                                <p class="date">03 March 2022 at 4:20 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>-1200 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>EC</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Edilson De Carvalho </h2>
                                                <p class="date">03 March 2022 at 4:20 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>-500 Points</h4>
                                        </div>
                                    </div>
                                    <div class="trx-list">
                                        <div class="trx-box">
                                            <div class="trx-name">
                                                <p>AV</p>
                                            </div>
                                            <div class="trx-content">
                                                <h2>Albini Vjosa</h2>
                                                <p class="date">31 March 2022 at 4:20 pm</p>
                                            </div>
                                        </div>
                                        <div class="trx-points">
                                            <h4>- 13,500 Points</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="all-team" role="tabpanel">
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
                    <div class="tab-pane fade" id="team-challenge" role="tabpanel">
                        <div class="sec-challenge">
                            <div class="challenge-wraper">
                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-message"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cards">
                                    <div class="c-img">
                                        <img src="assets-qa/images/Image-card.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <ul class="publish">
                                            <div class="p-date"> Published • 1 Feb 2022</div>
                                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                        </ul>
                                        <a href="#" class="card-text">You can put your daily challenge title here</a>
                                        <div class="comment">
                                            <ul>
                                                <li><span><i class="fa-regular fa-heart"></i></span>234</li>
                                                <li><span><i class="fa-regular fa-heart"></i></span>23</li>
                                            </ul>
                                            <a href="#">Read More <i class="fa-solid fa-chevron-right"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="leaderboard" role="tabpanel">
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
                </div>
            </div>
        </section>
		</PageLayout>
	);
};

Home.propTypes = {
	location: PropTypes.object.isRequired,
};

export default Home;
