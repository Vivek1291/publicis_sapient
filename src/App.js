import React, { Component } from 'react';
import axios from 'axios';
import Filters from './Components/fliters';
import Card from './Components/Card';
import URL from 'url-parse';
import Config from './config';

import './css/App.scss';
import config from './config';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedYear: '',
            listData: [],
            launch_year: '',
            launch_success: '',
            land_success: ''
        }
    }
    componentDidMount() {
        let urlString = window.location.href;
        let url = URL(urlString, true);
        let urlParms = url.query;
        let str="";
        let base_url = Config.base_url;
        const allParams = ['launch_year', 'launch_success', 'land_success'];
        for (let i = 0; i < allParams.length; i++) {
            if (urlParms[allParams[i]]) {
                switch(allParams[i]){
                  case "launch_year":
                  this.setState({launch_year:urlParms[allParams[i]]});
                  break;
                  case "launch_success":
                  this.setState({launch_success:urlParms[allParams[i]]});
                  break; 
                  case "land_success":
                  this.setState({land_success:urlParms[allParams[i]]});
                  break; 
                   default:
                   break; 
                }
                str += "&" + allParams[i] + "=" + urlParms[allParams[i]];
            }
        }
        base_url += str;
        this.getData(base_url);
    }

    getData = (url) => {
        axios.get(url).then(res => {
            this.setState({
                listData: res.data
            })
        }).catch((err) => {
            console.log('Error ', err)
        })
    }
    applyFilter = (value, category) => {
        this.setState({
            [category]: value
        })
        let url = '';
        if(category === 'launch_year') {

            url += ('&launch_year=' + value) + (this.state.launch_success !== '' ? ('&launch_success=' + this.state.launch_success) : '' ) + (this.state.land_success !== '' ? ('&land_success=' + this.state.land_success) : '' );
        }
        else if (category === 'launch_success') {
            url += (this.state.launch_year !== '' ? ('&launch_year=' + this.state.launch_year) : '' ) + ('&launch_success=' + value.toString()) + (this.state.land_success !== '' ? ('&land_success=' + this.state.land_success) : '' );   
        }
        else if (category === 'land_success') {
            url += (this.state.launch_year !== '' ? ('&launch_year=' + this.state.launch_year) : '' ) + (this.state.launch_success !== '' ? ('&launch_success=' + this.state.launch_success) : '' ) + ('&land_success=' + value.toString());   
        }
        let windowUrl = window.location.href.split('?')[0] + (url !== '' ?  '?' + url.slice(1) : '');
        window.history.pushState({}, "", windowUrl);
        this.getData(config.base_url+url)
    }
    render() {
        return (
            <div className="body-content">
                <header>
                    <h1 className="title">SpaceX Launch Program</h1>
                </header>
                <div id="content-section">
                    <div className="filter-section">
                        <Filters applyFilter = {this.applyFilter} />
                    </div>
                    <div className="list-section">
                        {
                            (this.state.listData && this.state.listData.length > 0 ) ?
                            this.state.listData.map((item, index) => {
                                return <div className="list-item" key={index}>
                                            <Card item = {item}/>
                                        </div>
                            })
                            :
                            <div className="center red-color">No Content Found</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;