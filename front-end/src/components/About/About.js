import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
import SlideDrawer from '../SlideDrawer/SlideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import './About.css'


class About extends Component{
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
            <div className="aboutPage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="aboutMain">
                    <div className="aboutBanner">
                        <h1>Get To Know Us</h1>
                        <img src="/Images/Web-design-vs-web-de.png" alt="" />
                    </div>
                </div>

            </div>
        )
    }
}

export default About;