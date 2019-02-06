import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor(props){
    super(props);
    this.state={
      customers:[]
    }
  }

   async componentDidMount(){
     await fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log(`Customers fetched ${customers}`)))
  }

  render() {
    return (
      <div className="App">
        <h1>Customers</h1>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
