import React, {Component} from 'react'
import './Footer.css'


class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footerRow">
                    <form>
                        <label>Newsletter</label>
                        <span className="input-group-text">Monthly Paymet</span>
                        <input type="email" className="form-control" placeholder="email@email.com"/>
                    </form>
                </div>
                <div className="footerRow1">
                    <div className="footerLinks">
                        <h2><img className="footerImg" src="Images/modern-flat-digital-wallet-concept-vector-9283516.png"/>The Budget Hobo</h2>
                        <p>Carrers</p>
                        <p>Terms and Conditions</p>
                    </div>
                    <div className="footerLinks">
                        <h2>Company</h2>
                        <p>Carrers</p>
                        <p>Terms</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="footerLinks">
                        <h2>Business</h2>
                        <p>Services</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className="footerLinks">
                        <h2>Developer</h2>
                        <p>Github</p>
                        <p>Code</p>
                        <p>Resources</p>
                    </div>
                </div>
                <hr/>
                <div className="footerRow2">
                    <h3>Copyright 2019</h3>
                    <h3>Privacy</h3>
                    <h3>Terms</h3>
                </div>
            </div>
        )
    }
}

export default Footer;