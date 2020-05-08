import React, {Component} from 'react';
import axios from 'axios';
import CountUp from 'react-countup';

class Stats extends Component {
    state = {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        countries: []
    }

    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api')
            .then(res =>{
                this.setState({
                    confirmed: res.data.confirmed.value,
                    deaths: res.data.deaths.value,
                    recovered: res.data.recovered.value
                });
            })
            .catch((err) => {
                console.log(err)
            })
        
        axios.get('https://covid19.mathdro.id/api/countries')
            .then(res => {
                let array = [];
                res.data.countries.forEach(country => {
                    array.push(country.name)
                });
                this.setState({
                    countries: array
                });
            })
            .catch((err) => {
                console.log(err)
            })

    }

    handleChange = (event) =>{
        this.setState({
            confirmed: 0,
            deaths: 0,
            recovered: 0
        })
        if(event.target.value === "Worldwide"){
            axios.get('https://covid19.mathdro.id/api')
            .then(res =>{
                this.setState({
                    confirmed: res.data.confirmed.value,
                    deaths: res.data.deaths.value,
                    recovered: res.data.recovered.value
                });
            })
            .catch((err) => {
                console.log(err)
            })
        }
        else{
            axios.get('https://covid19.mathdro.id/api/countries/' + event.target.value)
            .then(res => {
                this.setState({
                    confirmed: res.data.confirmed.value,
                    deaths: res.data.deaths.value,
                    recovered: res.data.recovered.value
                });
            })
            .catch((err) => {
                console.log(err)
            })
        }     
    }

    render() {
        const CountriesList = this.state.countries.map((country) => {
            return (
                <option value = {country} key = {country}>{country}</option>
            )
                
        })

        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return (
            <div className = "Stats mb-5 pt-4 px-2">
                <select className = "form-control country-select" onChange = {this.handleChange}>
                    <option value = "Worldwide">Worldwide</option>
                    {CountriesList}
                </select>
                <h5 className = "text-left mt-4 font-weight-bold">Case update</h5>
                    <small className = "text-left d-block">Last update on {months[month]} {date}, {year}</small>
                <div className = "row shadow stats mt-3 py-3">
                    <div className = "col-sm-4 p-2 pb-3">
                        <div className = "infected">
                            <h2 className = "text-warning">
                                <CountUp start = {0} end = {this.state.confirmed} duration = {2.5} separator = "," />
                            </h2>
                            <span className = "text-muted">Infected</span>
                        </div>
                    </div>
                    <div className = "col-sm-4 p-2 pb-3">
                        <div className = "deaths">
                            <h2 className = "text-danger">
                                <CountUp start = {0} end = {this.state.deaths} duration = {2.5} separator = "," />
                            </h2>
                            <span className = "text-muted">Deaths</span>
                        </div>
                    </div>
                    <div className = "col-sm-4 p-2 pb-3">
                        <div className = "recovered">
                            <h2 className = "text-success">
                                <CountUp start = {0} end = {this.state.recovered} duration = {2.5} separator = "," />
                            </h2>
                            <span className = "text-muted">Recovered</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats