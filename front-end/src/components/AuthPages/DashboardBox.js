import React, {Component} from 'react';
import Dashboard from './Dashboard';


class DashboardBox extends Component{
    render(){
        return(
            <div className="board">
               <div className="graphRow1">
                    <div className="graph1"> 
                        <canvas className="myChart"></canvas>
                    </div>
                    <div className="graph2">
                        <canvas className="myChart2"></canvas>
                    </div>
                </div> 

                <div className="graphRow2">
                    <div className="graph3">
                        <h1>Total Income</h1>
                        <div className="number1">
                            <p><span>$</span>5,560.00</p>
                        </div>
                        <hr />
                    </div>
                    <div className="graph4">
                            <h1>Total Budget</h1>
                            <div className="number1" className="balance">
                                    <p className="budget-amount"><span>$</span>4,700.00</p>
                                </div>
                                <hr />
                        </div>
                    <div className="graph5">
                        <h1>Total Expenses</h1>
                        <div className="number1" className="balance">
                                <p className="expense-amount"><span>$</span>300.00</p>
                            </div>
                            <hr />
                    </div>
                    <div className="graph6">
                        <h1>Total Balance</h1>
                        <div className="number1" className="balance">
                            <p className="balance-amount"><span>$</span>5,260.00</p>
                        </div>
                        <hr />
                    </div>
                </div>

                <div className="graphRow3">
                    <div className="graph7">
                        <h1>Popular Category</h1>
                        <div className="category">
                            <div className="categoryIcon">
                                <span><i class="fas fa-utensils fa-lg"></i></span>
                                <span><i class="fas fa-gas-pump fa-lg"></i></span>
                                <span><i class="fas fa-home fa-lg"></i></span>
                                <span><i class="fas fa-hand-holding-usd fa-lg"></i></span>
                                <span><i class="fas fa-shopping-bag fa-lg"></i></span>
                            </div>
                            <div className="categoryName">
                                <a href="#">Travel</a>
                                <a href="#">Food</a>
                                <a href="#">Bills</a>
                                <a href="#">Shopping</a>
                                <a href="#">Entertainment</a>
                                <a href="#">Others</a>
                            </div>
                            <div className="categoryPercent">
                                <p>5%</p>
                                <p>9%</p>
                                <p>71.3%</p>
                                <p>4%</p>
                                <p>.7%</p>
                                <p>9%</p>
                            </div>
                        </div>

                    </div>
                    <div className="graph8">
                            <h1>Recent Transactions</h1>
                            <div className="categoryTransaction">
                                <table>
                                    <tbody className="transactions">
                                    </tbody>
                                </table>
                
                            </div>
                    </div>
                    <div className="graph9">

                        <h1>Account Status</h1>
                        <div className="status">
                            <table>
                                <tbody className="status"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
           
            </div>
        )
    }
}

export default DashboardBox