import React, {Component} from 'react'


class Payments extends Component{
    render(){
        return(
            <div className="pricing">
                <div className="pricing1">
                    <h1>Basic Plan</h1>
                    <div className="pricingNumber">
                        <h5></h5><h3>Free</h3><h5>/Month</h5>
                    </div>
                    <div className="pricingList">
                        <div className="pricingIcon">
                            <span><i className="far fa-check-circle"></i></span>
                            <span><i className="far fa-check-circle"></i></span>
                            <span><i className="far fa-check-circle"></i></span>
                            <span className="red"><i className="far fa-times-circle"></i></span>
                            <span className="red"><i className="far fa-times-circle"></i></span>
                        </div>
                        <div className="pricingName">
                            <p>Monthly Trx Download</p>
                            <p>Unlimited Breakfast</p>
                            <p>Carpet Fresh</p>
                            <p>Drinks</p>
                            <p>Air Miles</p>
                        </div>
                        </div>
                        <div className="registerButtons">
                            <button>Sign Up Now</button>
                        </div>
                    </div>

                    <div className="pricing1">
                    <h1>Limited Plan</h1>
                    <div className="pricingNumber">
                        <h5>$</h5><h3>8</h3><h5>/Month</h5>
                    </div>
                    <div className="pricingList">
                        <div className="pricingIcon">
                            <span><i className="far fa-check-circle"></i></span>
                            <span><i className="far fa-check-circle"></i></span>
                            <span><i className="far fa-check-circle"></i></span>
                            <span><i className="far fa-check-circle"></i></span>
                            <span><i className="far fa-check-circle"></i></span>
                        </div>
                        <div className="pricingName">
                            <p>Weekly Trx Download</p>
                            <p>Unlimited Breakfast</p>
                            <p>Carpet Fresh</p>
                            <p>Drinks</p>
                            <p>Air Miles</p>
                        </div>
                        </div>
                        <div className="registerButtons">
                            <button>Sign Up Now</button>
                        </div>
                    </div>

                    <div className="pricing1">
                    <h1>Premium Plan</h1>
                    <div className="pricingNumber">
                        <h5>$</h5><h3>18</h3><h5>/Month</h5>
                    </div>
                    <div className="pricingList">
                        <div className="pricingIcon">
                        <span><i className="far fa-check-circle"></i></span>
                        <span><i className="far fa-check-circle"></i></span>
                        <span><i className="far fa-check-circle"></i></span>
                        <span><i className="far fa-check-circle"></i></span>
                        <span><i className="far fa-check-circle"></i></span>
                        </div>
                        <div className="pricingName">
                        <p>Unlimited Trx Download</p>
                            <p>Unlimited Breakfast</p>
                            <p>Carpet Fresh</p>
                            <p>Drinks</p>
                            <p>Air Miles</p>
                        </div>
                    </div>
                    <div className="registerButtons">
                        <button>Sign Up Now</button>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Payments;