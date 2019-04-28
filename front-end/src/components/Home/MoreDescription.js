import React, {Component} from 'react';


class MoreDescription extends Component{
    render(){
        return(
            <div className="moreDescription">
                <div className="description1">
                    <div className="descriptionLeft">
                        <h1>It's your data. You decide what's shared.</h1>
                        {/* <p>The Budget Hobo connects to the banks you trust with 
                            the apps you love so you can make the most of your finances
                        </p> */}
                    </div>
                    <div className="descriptionRight">
                        {/* <img className="descriptionImg2" src="/Images/5a79f951c69cc6000138e3d2_ChangeableColor8-11-min.png" alt="" /> */}
                        <img className="descriptionImg1" src="/Images/mockup.png" alt="" />
                    </div>
                </div>
                {/* <div className="description">
                    <div className="descriptionRight">
                        <img src="/Images/coding-isometric-12-400x350.png" alt="" />
                    </div>
                    <div className="descriptionLeft">
                    <h1>It's your data. You decide what's shared.</h1>
                        <p>The Budget Hobo connects to the banks you trust with 
                            the apps you love so you can make the most of your finances
                        </p>
                    </div>

                </div > */}

                <div className="powered">
                    <h1>Powered By</h1>
                    <div className="poweredImg">
                        <span><img src="/Images/coinbase.png" alt=""/></span>
                        <span><img src="/Images/plaid.png" alt=""/></span>
                        <span><img src="/Images/stripe.png" alt=""/></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoreDescription;