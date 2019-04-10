import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar'
import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop'

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
                    <img className="homeImg" src="Images/web-20180416200607977871.png" alt="" />
                    <h1>Professional Hobo</h1>
                    <i>Laughter is an instant vacation</i>

                </div>

            </div>
        )
    }
}
export default Home;