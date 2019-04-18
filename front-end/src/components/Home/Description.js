import React, {Component} from 'react'

class Description extends Component{
    render(){
        return(
            <div className="description">
                <div className="descriptionBox">
                    <img src="/Images/banking.png" alt />
                    <p>
                    dentity confirms users' identities with 
                    what's on file at the bank—in other words,
                     their name, phone number, address, and email
                    </p>
                </div>
                <div className="descriptionBox">
                    <img src="/Images/saving.png" alt />
                    <p>
                    Transactions helps users eliminate wasteful spending
                     and guides users towards investment and savings goals
                    by analyzing up to 24 months of clean, categorized transaction history
                    </p>
                </div>
                <div className="descriptionBox">
                    <img src="/Images/security.png" alt />
                    <p>
                    Auth pulls users' account and routing information, 
                    which can be used for ACH  payments and transfers
                    </p>
                </div>
            </div>

        )
    }
}

export default Description;