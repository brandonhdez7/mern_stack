import React, {Component} from 'react'
import axios from 'axios'
import Toolbar from '../Toolbar/Toolbar'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import './Auth.css'
// var NumberFormat = require('react-number-format');

class CryptoWallet extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          cryptos: [],
          slideDrawerOpen: false
        };
      }
    
    componentDidMount(){
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos})
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

            <div className="cryptoPage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="cryptoMain">
                {Object.keys(this.state.cryptos).map((key) => (
                    <div id="crypto-container">
                        <span className="left">{key}</span>
                        <span className="right">{this.state.cryptos[key].USD}</span>
                        {/* <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span> */}
                    </div>
                ))}
                </div>
            </div>
        )
    }
} 

export default CryptoWallet