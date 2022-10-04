import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, QuestionCircleOutlined, ContactsOutlined } from '@ant-design/icons';
import './MainLayout.less';

import './bootstrap.min.css';
import './style.css';
import './responsive.css';

import './simplePagination.css';

import logo from './assets-qa/images/Logo.png';
import homeIcon from './assets-qa/images/homeIcon.svg';
import chess from './assets-qa/images/chessIcon.svg';
import setting from './assets-qa/images/settingIcon.svg';
import bottom from './assets-qa/images/asideBottom-line.png';



const { Footer, Sider } = Layout;

const rootRoutes = ['/', '/about', '/contact'];
const aboutSubRoutes = ['/about/me', '/about/company'];

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout>
    <aside class="d-flex">
        <div class="aside-left">
            <div class="logo">
                <a href="brand-culture-strategy-admin.html">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div class="aside-left-nav">
                <ul>
                    <li>
                        <a href="admin-home.html">
                            <img src={homeIcon} alt="Home Icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src={chess} alt="Chess Icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="account-setting.html">
                            <img src={setting} alt="Setting Icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <img src={bottom} alt="" class="aside-bottom-img"/>
        </div>
        <div class="aside-right">
            <div class="top-btns">
                <select name="" id="">
                    <option value="1" selected>Company Name</option>
                    <option value="2">Company Name2</option>
                    <option value="3">Company Name3</option>
                    <option value="4">Company Name4</option>
                </select>
                <ul>
                    <li>
                        <a href="create-new.html" class="btn-qa btn-red w-100"> + Create New</a>
                    </li>
                    <li class="mt-2">
                        <a href="javascript:void(0)" class="btn-qa btn-blue w-100"> Upload a File </a>
                    </li>
                </ul>
            </div>
            <div class="right-nav">
                <nav>
                    <ul>
                        <li class="navLink-qa">
                            <div class="d-flex align-items-center gap-12px">
                                <img src="./assets-qa/images/cultureIcon2.png" class="icon-img"/>
                                <a href="brand-culture-strategy-admin.html">
                                    Culture Check
                                </a>
                                <span class="caret-icon"> <img src="./assets-qa/images/downIcon.svg" alt="down"/> </span>
                            </div>
                            <ul class="sub-menu">
                                <li class="navLink-qa">
                                    <a href="brand-culture-strategy-admin.html">Brand Culture Strategy</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="surveys-admin.html">Surveys</a>
                                </li>
                            </ul>
                        </li>
                        <li class="navLink-qa">
                            <div class="d-flex align-items-center gap-12px">
                                <img src="./assets-qa/images/educationIcon.svg" class="icon-img"/>
                                <a href="learning.html">
                                    Learning
                                </a>
                                <span class="caret-icon"> <img src="./assets-qa/images/downIcon.svg" alt="down"/> </span>
                            </div>
                            <ul class="sub-menu">
                                <li class="navLink-qa">
                                    <a href="learning-inner.html">Courses</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="learning-inner.html">Videos</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="learning-inner.html">Archived</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="learning-certification.html">Certification</a>
                                </li>
                            </ul>
                        </li>
                        <li class="navLink-qa">
                            <div class="d-flex align-items-center gap-12px">
                                <img src="./assets-qa/images/rewardIcon.svg" class="icon-img"/>
                                <a href="rewards.html">
                                    Rewards
                                </a>
                                <span class="caret-icon"> <img src="./assets-qa/images/downIcon.svg" alt="down"/> </span>
                            </div>
                            <ul class="sub-menu">
                                <li class="navLink-qa">
                                    <a href="javascript:void(0)">Redeem</a>
                                </li>

                            </ul>
                        </li>
                        <li class="navLink-qa">
                            <div class="d-flex align-items-center gap-12px">
                                <img src="./assets-qa/images/communityIcon.svg" class="icon-img"/>
                                <a href="./community-social-feed.html">
                                    Community
                                </a>
                                <span class="caret-icon"> <img src="./assets-qa/images/downIcon.svg" alt="down"/> </span>
                            </div>
                            <ul class="sub-menu">
                                <li class="navLink-qa">
                                    <a href="resource-group.html">Resource Groups</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="Events.html">Events</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="mentorship-settings.html">Mentorship</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="./community-social-feed.html">social Feed</a>
                                </li>
                            </ul>
                        </li>

                        <li class="navLink-qa">
                            <div class="d-flex align-items-center gap-12px">
                                <img src="./assets-qa/images/compaignIcon.png" class="icon-img"/>
                                <a href="campaigns.html">
                                    Campaign
                                </a>
                                <span class="caret-icon"> <img src="./assets-qa/images/downIcon.svg" alt="down"/> </span>
                            </div>
                            <ul class="sub-menu">
                                <li class="navLink-qa">
                                    <a href="workspaces.html">Workspaces</a>
                                </li>

                                <li class="navLink-qa">
                                    <a href="tasks.html">Tasks</a>
                                </li>
                                <li class="navLink-qa">
                                    <a href="admin-recruiting-dashboard.html">Recruting</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="task-inbox-tabs">
                <div>
                    <div class="tasktab-btns">
                        <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="task-btn active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true">TASKS</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="task-btn" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab"
                                    aria-controls="pills-profile" aria-selected="false">INBOX</button>
                            </li>
                        </ul>
                        <button class="icon-btn bars-icon"> <i class="fas fa-bars"></i> </button>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">

                            <div class="tabcontent-qa">

                                <ul class="tasks-list">

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per75-above">75%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per25-above">25%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>



                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <div class="tabcontent-qa">
                                <ul class="user-msgbox">
                                    <li>
                                        <a href="notification-page.html">
                                            <div class="user-msg">
                                                <div class="avatar">
                                                    <img src="assets-qa/images/Avartar01.png" alt=""/>
                                                </div>
                                                <div class="msg">
                                                    <h4>Lorry Olgaw</h4>
                                                    <p>Check this out! Co</p>
                                                </div>
                                                <span class="status online"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="notification-page.html">
                                            <div class="user-msg">
                                                <div class="avatar">
                                                    <img src="assets-qa/images/Avartar02.png" alt=""/>
                                                </div>
                                                <div class="msg">
                                                    <h4>Mark Thimyklanj</h4>
                                                    <p>Bro, can you give...</p>
                                                </div>
                                                <span class="status online"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="notification-page.html">
                                            <div class="user-msg">
                                                <div class="avatar">
                                                    <img src="assets-qa/images/avatar03.png" alt=""/>
                                                </div>
                                                <div class="msg">
                                                    <h4>Marco Polo</h4>
                                                    <p>Update on the new..</p>
                                                </div>
                                                <span class="status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="notification-page.html">
                                            <div class="user-msg">
                                                <div class="avatar">
                                                    <img src="assets-qa/images/avatar04.png" alt=""/>
                                                </div>
                                                <div class="msg">
                                                    <h4>Eduardo Ortega</h4>
                                                    <p>More leads today!...</p>
                                                </div>
                                                <span class="status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="notification-page.html">
                                            <div class="user-msg">
                                                <div class="avatar">
                                                    <img src="assets-qa/images/avatar05.png" alt=""/>
                                                </div>
                                                <div class="msg">
                                                    <h4>Lance Morse</h4>
                                                    <p>These are the sale...</p>
                                                </div>
                                                <span class="status"></span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </aside>
        <Layout>
          {children}
          <Footer>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Nikhil-Kumaran/reactjs-boilerplate"
            >
              GitHub
            </a>
            <span> | </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.npmjs.com/package/reactjs-boilerplate"
            >
              npm
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
