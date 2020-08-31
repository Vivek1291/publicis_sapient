import React, { Component } from 'react';
import FilterBox from './filter-box';
import '../../css/filters/filters.scss';
import data from '../../infoData';
import URL from 'url-parse';


class Filters extends Component {
    render() {
        let url = URL(window.location.href, true);
        let urlParms = url.query;
        return(
            <div className="filter-content">
                <h4 className="label">Filters</h4>
                <FilterBox value="Launch Year" category="launch_year" applyFilter = {this.props.applyFilter} items={data.launch_year} selectedValue = {urlParms.launch_year}/>
                <FilterBox value="Successful Launch" category="launch_success" applyFilter = {this.props.applyFilter} items={data.launch_success} selectedValue = {urlParms.launch_success}/>
                <FilterBox value="Successful Landing" category="land_success" applyFilter = {this.props.applyFilter} items={data.land_success} selectedValue = {urlParms.land_success}/>
            </div>
        )
    }
}

export default Filters;