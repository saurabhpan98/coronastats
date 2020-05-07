import React, {Component} from 'react';
import axios from 'axios';

class Stats extends Component {
    state = {
        confirmed: null,
        deaths: null,
        recovered: null,
        countries: []
    }

    componentDidMount(){
        axios.get('https://api.covid19api.com/summary')
            .then(res => {
                this.setState({
                    confirmed: res.data.Global.TotalConfirmed,
                    deaths: res.data.Global.TotalDeaths,
                    recovered: res.data.Global.TotalRecovered
                });
            })
        axios.get('https://api.covid19api.com/countries')
            .then(res => {
                let countries = [];
                res.data.forEach((country) => {
                    countries.push({Country: country.Country, Slug: country.Slug});
                })

                this.setState({
                    countries: countries
                });
            })

    }

    handleChange = (event) =>{
        axios.get('https://api.covid19api.com/live/country/' + event.target.value)
            .then(res => {
                this.setState({
                    confirmed: res.data[res.data.length-1].Confirmed,
                    deaths: res.data[res.data.length-1].Deaths,
                    recovered: res.data[res.data.length-1].Recovered,
                });
            })
    }

    render() {
        const CountriesList = this.state.countries.map((country) => {
            return (
                <option value = {country.Slug} key = {country.Slug}>{country.Country}</option>
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
                <small className = "text-left d-block">Newest update on {months[month]} {date}, {year}</small>
                <div className = "row shadow stats mt-3 py-3">
                    <div className = "col-sm-4 p-2 pb-3">
                        <div className = "infected">
                            <h2 className = "text-warning">{this.state.confirmed}</h2>
                            <span className = "text-muted">Infected</span>
                        </div>
                    </div>
                    <div className = "col-sm-4 p-2 pb-3">
                        <div className = "deaths">
                            <h2 className = "text-danger">{this.state.deaths}</h2>
                            <span className = "text-muted">Deaths</span>
                        </div>
                    </div>
                    <div className = "col-sm-4 p-2 pb-3">
                        <div className = "recovered">
                            <h2 className = "text-success">{this.state.recovered}</h2>
                            <span className = "text-muted">Recovered</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats