import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      data: [],
      resp: null,
      user: null,
      pass: null
    };
  }

  doEdit = (e) => {
    this.setState({
      city: e.target.value,
    });
  }

  changeUsername = (e) => {
    this.setState({
      user: e.target.value,
    });
  }

  changePassword = (e) => {
    this.setState({
      pass: e.target.value,
    });
  }

  doLogin = (e) => {
    const url = "/login";
    const data = {
      user: this.state.user,
      pass: this.state.pass
    }
    axios.post(url, data)
      .then((res) => {
        this.setState({
          data: [],
          resp: "Success: user logged in."
        });
      })
      .catch((err) => {
        this.setState({
          data: [],
          resp: "Error: failed to login user."
        });
      });
  }

  getAllCities = (e) => {
    const url = "/cities"
    axios.get(url)
      .then((res) => {
        this.setState({
          data: res.data,
          resp: null
        });
      })
      .catch((err) => {
        this.setState({
          data: [],
          resp: "Error: failed to get all cities."
        });
      });
  }

  addCity = (e) => {
    const url = "/cities"
    const data = {
      name: this.state.city,
      population: 10000
    }
    axios.post(url, data)
      .then((res) => {
        this.setState({
          data: [],
          resp: "Success: city added."
        });
      })
      .catch((err) => {
        this.setState({
          data: [],
          resp: "Error: failed to add city."
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
        <div>
          <div>
          Username: <input type="text" onChange={this.changeUsername}></input><br/>
          Password: <input type="text" onChange={this.changePassword}></input><br/>
          <button onClick={this.doLogin}>Login</button><br/><br/>
          </div>
          <button onClick={this.getAllCities}>Get All Cities</button><br/>
          <input type="text" onChange={this.doEdit}></input>
          <button onClick={this.addCity}>Add City</button>
          <div>
            {this.state.resp?this.state.resp:null}
          </div>
          <div>
          {
            this.state.data.map((item =>
            <div>
              ID: {item.id}, Name: {item.name}, Population: {item.population}
            </div>))
          }
          </div>
        </div>
    );
  }
}