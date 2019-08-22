import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAccount } from '../store/actions/createAccountAction';

class CreateAccount extends Component {
    state = {
        balance: '',
        type: ''
    }

    handleChange = (e) => {
        const field = e.target.id;
        const value = e.target.value;
        this.setState(() => ({
            [field]: value
        }))
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { balance, type } = this.state;
        const response = await this.props.createAccount({ balance, type })
        if (response.type === 'CREATE_ACCOUNT_SUCCESS') {
            this.props.history.push('/dashboard')
            toast.success('Account created successfully',{toastId: 1 });
        }
        if (response.type === 'CREATE_ACCOUNT_FAILURE') {
            toast.error(`${response.error.error}`,{toastId: 1, className: 'toastCss'});
        }
    }
    render() {
        const { account } = this.props

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
                        <button className="btn orange darken-3 z-depth-0">
                        {
                            account.isLoading
                            ?
                            <PulseLoader sizeUnit={"px"} size={10} color={'#ffffff'}
                            loading={account.isLoading}/>
                            :
                            'Create Account'
                        }
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    account: state.create
})

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (accountObj) => dispatch(createAccount(accountObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
