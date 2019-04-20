import React, {Component} from 'react';


class Navigation extends Component{ 
    render(){
        return(
            <div className="navbar">
                <div className="profileImage">
                    <img className="profileImage1" src="<%= imageProfile %>"/>
                    <h3>Brandon</h3>
                </div>
                <div class="navs">
                    <div className="list">
                        <div class="listIcon">
                                <span><i className="fas fa-chart-line fa-lg"></i></span>
                                <span><i className="fas fa-dollar-sign fa-lg"></i></span>
                                <span><i className="fas fa-users fa-lg"></i></span>
                                <span><i className="fas fa-piggy-bank fa-lg"></i></span>
                                <span><i className="fas fa-question-circle fa-lg"></i></span>
                        </div>
                        <div class="listName">

                            <a href="/dashboard">Dashboard</a>
                            <a href="/budget">Budget</a>
                            <a href="/profile">Profile</a>
                            <a id="bank" href="/bank">Bank</a>
                            <a href="/howItWorks">How it works</a>
                        </div>
                    </div>
                    
                    <div class="list2">
                        <div class="listIcon2">
                                <span><i className="fab fa-github fa-lg"></i></span>
                                <span><i className="fab fa-instagram fa-lg"></i></span>
                                <span><i className="fab fa-facebook fa-lg"></i></span>
                        </div>
                        <div class="listName2">
                            <a href="https://github.com/brandonhdez7/backendProject.git" target="_blank">Github</a>
                            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                            <a href="http://www.faceboook.com/" target="_blank">Facebook</a>
                        </div>
                    </div>

                    <div class="list3">
                        <div class="listIcon3">
                                <span><i className="fas fa-briefcase fa-lg"></i></span>
                                <span><i className="fas fa-handshake fa-lg"></i></span>
                                <span><i className="fas fa-cog fa-lg"></i></span>
                        </div>
                        <div class="listName3">
                            <a href="/careers">Careers</a>
                            <a href="/privacyStatement">Privacy Statement</a>
                            <a href="/profile">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;