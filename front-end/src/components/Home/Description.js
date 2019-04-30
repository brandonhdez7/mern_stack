import React, {Component} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';

const Wrapper = styled.div`
    width: 100%;
`;

const Page = styled.div`
    width: 100%;
    color: black;
    display:flex;
    justify-content: center;
    text-align: center;
`;


class Description extends Component{
    render(){
        return(
            <Wrapper>
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
                    >
                    <Page><img className="descriptionImage" src="/Images/koodaa.png" alt=""/></Page>
                    <Page><img src="/Images/banks.png" alt=""/></Page>
                    <Page><img src="/Images/payments.png" alt=""/></Page>
                </Slider>
            
            
            </Wrapper>
        )
    }
}

export default Description;



// class Description extends Component{
//     render(){
//         return(
//             <div className="description">
//                 <h2>Why The Budget Hobo?</h2>
//                 <div className="descriptionContainer">
//                     <div className="descriptionBox">
//                         <img src="/Images/banking.png" alt />
//                         <p>
//                         dentity confirms users' identities with 
//                         what's on file at the bank—in other words,
//                         their name, phone number, address, and email
//                         </p>
//                     </div>
//                     <div className="descriptionBox">
//                         <img src="/Images/saving.png" alt />
//                         <p>
//                         Transactions helps users eliminate wasteful spending
//                         and guides users towards investment and savings goals
//                         by analyzing up to 24 months of clean, categorized transaction history
//                         </p>
//                     </div>
//                     <div className="descriptionBox">
//                         <img src="/Images/security.png" alt />
//                         <p>
//                         Auth pulls users' account and routing information, 
//                         which can be used for ACH  payments and transfers
//                         </p>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }

// export default Description;