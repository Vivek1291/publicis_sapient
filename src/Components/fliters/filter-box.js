import React, { Component } from 'react';

import '../../css/filters/filter-fox/filter-box.scss';

class FilterBox extends Component {
    
    render() {
        return (
            <div className="filters">
                <p className="filter-heading center">{this.props.value}</p>
                <div className="horizontal-line"></div>
                <div className="filter-values">
                    {
                        this.props.items && this.props.items.length > 0 &&
                        this.props.items.map((item, index) => {
                            return <div className="filter-box-container center" key={index}>
                                        <div className={"filter-box " + (this.props.selectedValue && this.props.selectedValue  === item.toString() ? 'selected' : '')} onClick={() => this.props.applyFilter(item, this.props.category)}>{item}</div>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
} 

export default FilterBox;