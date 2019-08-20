import React, { Component } from 'react';
import { connect } from 'react-redux';
import { creatUser } from '../store/actions/authActions';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { firstName, lastName, email, password } = this.state
        this.props.creatUser({
            firstName,
            lastName,
            email,
            password
        }).then(res => {
            if (res === 201) {
                console.log(res)
            } else {
                console.log(res)
            }
        })

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white signup-form" autoComplete="off">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange darken-3 z-depth-0">Signup</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    creatUser: (userObject) => dispatch(creatUser(userObject)),
});

export default connect(mapStateToProps,  mapDispatchToProps)(SignUp);
