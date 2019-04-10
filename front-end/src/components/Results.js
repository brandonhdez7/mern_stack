import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar'
import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop'

class Results extends Component{
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
            <div className="resultsPage">
                <div className="results">
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    <SlideDrawer show={this.state.slideDrawerOpen}/> 
                    {backdrop}
                    <div className="resultsTitle">
                        <h1>ATL</h1>
                        <img className="resultsImage" src="./Images/paper-plane-icon-white-vector-16585648.png" alt="" />
                        <h1>LAX</h1>
                    </div>
                    <img className="planetImage" src="./Images/12.png" alt="" />
                    <div className="resultsTickets">
                        <div className="ticketBox">
                            <div className="ticketTop">
                                
                            </div>
                            <div className="ticketBottom">
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Results;