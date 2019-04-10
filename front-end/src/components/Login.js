import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar'
import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop'

class Login extends Component{
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
        let slideDrawer;
        let backdrop;

        if(this.state.slideDrawerOpen){
            slideDrawer = <SlideDrawer />;
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }

        return(
            <div className="loginPage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {slideDrawer} 
                {backdrop}
                <img className="loginImage" src="./Images/paper-plane-icon-white-vector-16585648.png" alt="" />
                <div className="loginForm">
                    <form>
                        <label>
                            <input type="text" required />
                            <img className="label-text" src="./Images/images.png" alt="" />
                        </label>
                        <label>
                            <input type="password" required />
                            <img className="label-text" src="./Images/locked-outline.png" alt="" />
                        </label>
                            <button>Login</button>
                    </form> 
                </div>
                <Router>
                    <Link className="links" to="/#">Forgot Password?</Link>
                    <h3>Don't have an account? <Link className="links" to="/#">SignUp</Link></h3>
                </Router>
            </div>
        )
    }
}
export default Login;