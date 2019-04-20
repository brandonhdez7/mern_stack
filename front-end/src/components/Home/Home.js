import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import Payments from './payments'
import Footer from '../../Footer/Footer'
import Description from './Description';
import MoreDescription from './MoreDescription'

class Home extends Component{
    state = {
        slideDrawerOpen: false
    }


    drawerToggleClickHandler = () => {
        this.setState((PrevState) => {
            return {slideDrawerOpen: !PrevState.slideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({slideDrawerOpen: false});
    }

    render(){
        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }

        return(
            <div className="homePage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="homeMain">
                    <div className="banner">
                        <div className="bannerLeft">
                            <h1>Being On A Budget Has Never Been Easier.</h1>
                            <p>
                                Improve financial health with categorized transactions and
                                make it easy for everyone to manage business finances.
                                Pay friends, bills, or other businesses with The Budget Hobo.
                            </p>
                            <Link className="links" to="">Learn More About Payment Solutions & Budgeting  <i class="fas fa-arrow-right"></i></Link>
                            <div className="registerButtons">
                                <button>Login</button>
                                <button>Register</button>
                            </div>
                        </div>
                        <div className="bannerRight">
                            <img className="homeImage" src="/Images/crypto-currency-isometric_2x.png" alt=""/>
                        </div>
                    </div>
                        < Description />
                    {/* <form>
                        <label className="homeSearch">
                            <input placeholder="Destination" type="text" required />
                            <img className="label-text1" src="./Images/55369.png" alt="" />
                        </label>
                    </form> */}
                    < MoreDescription />
                    <div className="pricing">
                        <Payments/>
                    </div>
                    < Footer />

                </div>

            </div>
        )
    }
}
export default Home;