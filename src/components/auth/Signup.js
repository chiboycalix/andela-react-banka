import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { creatUser } from '../store/actions/signUpActions';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

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

    handleSubmit = async (event) => {
        event.preventDefault()
        const { firstName, lastName, email, password } = this.state
        const response = await this.props.creatUser({
            firstName,
            lastName,
            email,
            password
        })
        if (response.type === 'CREATE_USER_SUCCESS') {
            this.props.history.push('/dashboard')
            localStorage.setItem('user', JSON.stringify(response.payload))
            toast.success(`${response.payload.email} registered successfully`,{ toastId: 1});
        }
        if (response.type === 'CREATE_USER_FAILURE') {
            toast.error(`${response.error.error}`,{toastId: 1, className: 'toastCss'});
        }
    }
    render() {
        const { auth } = this.props
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
                        <button className="btn orange darken-3 z-depth-0">
                        {
                            auth.isLoading
                            ?
                            <PulseLoader sizeUnit={"px"} size={10} color={'#ffffff'}
                            loading={auth.isLoading}/>
                            :
                            'Signup'
                        }
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.signup,
});

const mapDispatchToProps = (dispatch) => ({
    creatUser: (userObject) => dispatch(creatUser(userObject)),
});

export default connect(mapStateToProps,  mapDispatchToProps)(SignUp);
