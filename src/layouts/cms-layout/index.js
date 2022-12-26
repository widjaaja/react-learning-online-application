import React from "react";

import IcHome from "../../assets/images/home.svg";
import IcCourse from "../../assets/images/course.svg";
import IcProfile from "../../assets/images/profile.svg";

import IcUser from "../../assets/images/user.svg";
import IcSearch from "../../assets/images/search.svg";
import IcNotification from "../../assets/images/notification.svg";
import IcProfilePic from "../../assets/images/profile-pic/profile-1.png";

import illustration1 from "../../assets/images/courses/Illustration-1.png";
import illustration2 from "../../assets/images/courses/Illustration-2.png";
import illustration3 from "../../assets/images/courses/Illustration-3.png";

function CMSLayout() {

  return (
    <div className="app-container container-xxl">
        <div className="app-sidebar">
            <div className="profile-content">
                <img width="48" height="48" src={IcProfilePic} alt="" />
                <div className="user-information">
                    <span className="title">John Smith</span>
                    <span className="desc">johnsmith@gmail.com</span>
                </div>
            </div>
            <div className="tab-content">
                <div className="list-tab">
                    <div className="item">
                        <img src={IcHome} alt="" />
                        <span>Home</span>
                    </div>
                    <div className="item">
                        <img src={IcCourse} alt="" />
                        <span>My Courses</span>
                    </div>
                    <div className="item">
                        <img src={IcProfile} alt="" />
                        <span>Profile</span>
                    </div>
                </div>
            </div>
            <div className="upgrade-plan-content">
                <div className="content">
                    <div className="ic-card">
                        <img src={IcUser} alt="" />
                    </div>
                    <span className="title">Upgrade Plan</span>
                    <span className="desc">Become a <strong>Pro</strong> member today and save more than <strong>75%.</strong></span>

                    <button className="btn btn-primary">See Deal</button>
                </div>
            </div>
            <div className="signout-content">
                <span>Log Out</span>
            </div>
        </div>
        <div className="app-body">
            <div className="app-content">
                <div className="head">
                    <span className="title">Hello,</span>
                    <span className="username">John Smith 👋</span>
                </div>
                <div className="body">
                    <div className="section-course">
                        <span className="title">Courses 😉</span>
                        <div className="list-category">
                            <div className="item new">
                                <div className="round"></div>
                                <span>New</span>
                            </div>
                            <div className="item popular">
                                <div className="round"></div>
                                <span>Popular</span>
                            </div>
                            <div className="item free">
                                <div className="round"></div>
                                <span>Free</span>
                            </div>
                            <div className="item pro">
                                <div className="round"></div>
                                <span>Pro</span>
                            </div>
                        </div>
                        <div className="list-course">
                            <div className="item">
                                <div className="illustration-content">
                                    <img src={illustration1} alt="" />
                                </div>
                                <div className="content">
                                    <span className="duration">- 3 h 15 min</span>
                                    <span className="title">JavaScript</span>
                                    <span className="desc">Advanced web applications.</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="illustration-content">
                                    <img src={illustration2} alt="" />
                                </div>
                                <div className="content">
                                    <span className="duration">- 3 h 15 min</span>
                                    <span className="title">JavaScript</span>
                                    <span className="desc">Advanced web applications.</span>
                                </div>

                            </div>
                            <div className="item">
                                <div className="illustration-content">
                                    <img src={illustration3} alt="" />
                                </div>
                                <div className="content">
                                    <span className="duration">- 3 h 15 min</span>
                                    <span className="title">JavaScript</span>
                                    <span className="desc">Advanced web applications.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-right-sidebar">
                <div className="section-action">
                    <div className="inp-search">
                        <img width="24" height="24" src={IcSearch} alt="" />
                        <input type="text" name="name" placeholder="Search" required></input>
                    </div>
                    <div className="notif">
                        <img src={IcNotification} alt="" />
                    </div>
                </div>
                <div className="section-lessons">
                    <span className="title">Lessons 📖</span>
                    <div className="list-lessons">
                        <div className="item">
                            <div className="left">
                                <div className="round"></div>
                            </div>
                            <div className="right">
                                <span className="duration">- 0 h 55 min</span>
                                <span className="title">Introduction & Basics</span>
                                <span className="desc">Learn all the basics that you need to know to get started.</span>
                                <div className="section-progress">
                                    <div className="track-progress">
                                        <div className="current"></div>
                                    </div>
                                    <span>12%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default CMSLayout;