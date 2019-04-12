import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Toolbar from './Toolbar/Toolbar';
import {register} from './UserFunctions'


class Profile extends Component{
    constructor(){
        super()
        this.state ={
                slideDrawerOpen: false,
                name: '',
                email: '',
                password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/profile`)
    })

}

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.name,
            email: decoded.email,
            password: decodeURI.password

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
                  
                    <form noValidate onSubmit={this.onSubmit}>
                        <h4>Name</h4>
                        <input name="name" type="text" value={this.state.name} onChange={this.onChange}></input>
                        <h4>email</h4>
                        <input name="email" type="email" value={this.state.email} onChange={this.onChange}></input>
                        <h4>Password</h4>
                        <input name="password" type="password" value={this.state.password} onChange={this.onChange}></input>
                        <button type="submit">Save</button>
                    </form>  
                </div> 
            </div>
        )
    }
}

export default Profile;