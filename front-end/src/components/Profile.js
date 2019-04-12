import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Toolbar from './Toolbar/Toolbar';


class Profile extends Component{
    constructor(){
        super()
        this.state ={
                slideDrawerOpen: false,
                name: '',
                email: ''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.name,
            email: decoded.email

        })
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
            <div className="loginPage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <img className="loginImage" src="./Images/paper-plane-icon-white-vector-16585648.png" alt="" />
                <div className="loginForm">
                    <form>
                        <h4>Name</h4>
                        <h4>{this.state.name}</h4>
                        <h4>email</h4>
                        <h4>{this.state.email}</h4>
                    </form>  
                </div> 
            </div>
        )
    }
}

export default Profile;