import React, {Component} from 'react';

class Ticket extends Component {
    constructor(props){
        super(props)
        this.state = {
            items= [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch()
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:  true,
                items: json
            })
        })
    }


    render(){
        var { isLoaded, items} = this.state;

        if (!isLoaded){
            return <div> Loading...</div>;
        }else{
            
            return(
                <div className="resultsTickets">
                    <div className="ticketBox">
                        <div className="ticketTop">
                        <ul>
                            <li>
                                {items.map(item => (
                                    <li key={item.id}>
                                        {item.origin} | {item.depature}
                                    </li>
                                ))}
                            </li>
                        </ul>
                                
                        </div>
                        <div className="ticketBottom">
                            
                        </div> 
                    </div>
                </div>
            )
        }
    }
}

export default Ticket;