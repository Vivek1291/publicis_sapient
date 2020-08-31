import React, { Component } from 'react';

// Css
import '../../css/card/card.scss';


class Card extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="card shadow-1">
                { item &&
                    <div className="link-container">
                        <div className="image-container">
                            <img src={item.links ? item.links.mission_patch : ''}  alt="" />
                        </div>
                        <div className="content">
                            <p className="card-title">{item.mission_name + ' #' + item.flight_number} </p>
                            <div className="caption clearfix">
                                <span className="left-content">Mission Id:</span>
                                {/* <span className="right-content">{'mission ids'}</span> */}
                                {
                                    item.mission_id && item.mission_id.length > 0 &&
                                    <ul className="clearfix">
                                        <li>{item.mission_id.join(', ')}</li>
                                    </ul>
                                }
                            </div>
                            
                            <div className="caption clearfix">
                                <span className="left-content">Launch Year:</span>
                                <span className="right-content">{item.launch_year}</span>
                            </div>
                            
                            <div className="caption clearfix">
                                <span className="left-content">Succeessful Launch:</span>
                                <span className="right-content">{item.launch_success && item.launch_success.toString()}</span>
                            </div>
                            
                            <div className="caption clearfix">
                                <span className="left-content">Successful Landing: </span>
                                <span className="right-content">{'launch_landing'}</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

}


export default Card;