import React, { Component } from 'react';
import './createAccount.css';

class CreateAccount extends Component {
    state = {
        balance: '',
        type: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white create-account-form">
                    <h5 className="grey-text text-darken-3">Create Account</h5>
                    <div className="input-field">
                        <label htmlFor="balance">Balance</label>
                        <input type="text" id="balance" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="balance">Type</label>
                    <input type="text" id="type" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange darken-3 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateAccount;
