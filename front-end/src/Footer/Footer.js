import React, {Component} from 'react'
import './Footer.css'


class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footerLinks">
                    <h1>Company</h1>
                    <p>Carrers</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footerLinks">
                    <h1>Business</h1>
                    <p>Services</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="footerLinks">
                    <h1>Developer</h1>
                    <p>Github</p>
                    <p>Code</p>
                    <p>Resources</p>

                </div>

            </div>
        )
    }
}

export default Footer;