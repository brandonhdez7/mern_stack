import React from 'react';

import './SlideDrawer.css'

const slideDrawer = props => {
let drawerClasses = 'slide-drawer';
if(props.show){
    drawerClasses = 'slide-drawer open';
}

    return(
        <nav className={drawerClasses} >
            <ul>
                <li><a href="/">Producst</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    )
};

export default slideDrawer;