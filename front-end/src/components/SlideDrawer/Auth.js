import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Auth extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render(){
       const loginRegLink = (
           <ul className="navbar-nav">
                <li className="nav=item">
                    <Link to="/login" className="nav-link">
                    Login
                    </Link>
                </li>
                <li className="nav=item">
                    <Link to="/register" className="nav-link">
                    Register
                    </Link>
                </li>
           </ul>
       )
       const userLink = (
            <ul className="navbar-nav">
                <li className="nav=item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav=item">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-Link">
                        Logout
                    </a>
                </li>
            </ul>
       )
       return (
           <nav>
               <button type="button">
               </button>
               <div>
                   <ul>
                       <li>
                           <Link to="/">
                            Home
                           </Link>
                       </li>
                   </ul>
                   {localStorage.usertoken ? userLink : loginRegLink}
               </div>
           </nav>
       )
    }

}
export default withRouter(Auth);