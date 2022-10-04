import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';

import challenge from './assets-qa/images/Image-card.png';

const TeamChallenges = ({ location: { pathname } }) => {

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
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#team-challenge" type="button"
                        aria-selected="true"><a href ="team-challenges" >Team challenges</a></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link " data-bs-toggle="pill" data-bs-target="#leaderboard" type="button"
                        aria-selected="false"><a href ="leaderboard">Leaderboard</a></button>
                </li>
            </ul>
                    <div class="tab-pane " id="team-challenge" role="tabpanel">
                        <div class="sec-challenge">
                            <div class="challenge-wraper">
                                <div class="cards">
                                    <div class="c-img">
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..."/>
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
                                        <img src={challenge} class="card-img-top" alt="..." />
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

        </section>
        </PageLayout>
    );
};

TeamChallenges.propTypes = {
    location: PropTypes.object.isRequired,
};

export default TeamChallenges;
