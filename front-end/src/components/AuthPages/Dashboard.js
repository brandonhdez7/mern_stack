import React, {Component} from 'react'
import Navigation from './Navigation'
import './Auth.css'
import DashboardBox from './DashboardBox';
import Toolbar from '../Toolbar/Toolbar'


class Dashboard extends Component{
    render(){
        return(
            <div className="dashboardPage">
                <Toolbar />
                <div className="dashboard">
                    < Navigation />
                    < DashboardBox />
                </div>

            </div>
        )
    }
}

export default Dashboard;