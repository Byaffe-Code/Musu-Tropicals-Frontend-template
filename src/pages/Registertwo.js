import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "../redux/store";
import { registerFailure, registerSuccess, registerRequest } from "../redux/actions/registerAction";
import { loginFailure } from "../redux/actions/loginAction";

class Registertwo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmedPassword: '',
            errors: {}
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.confirmPassword = this.confirmPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        return this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        return this.setState({ password: e.target.value });
    }

    usernameChange(e) {
        return this.setState({ username: e.target.value });
    }

    confirmPassword(e) {
        this.setState({ confirmedPassword: e.target.value });

    }
    onRegister = () => {
        const { dispatch, history } = this.props
        const { email, username, password, confirmedPassword } = this.state

        dispatch(registerFailure())

        let isValid = true
        let currentErrors = {}

        //simple validation
        if (username.trim().length < 5) {
            currentErrors.usernameError = 'User name is too short'
            isValid = false
        }

        if (username === '') {
            currentErrors.usernameError = 'Please choose a username'
            isValid = false
        }

        if (password.trim() !== confirmedPassword.trim()) {
            currentErrors.passwordError = 'Passwords do not match'
            isValid = false
        }

        if (password.trim() === '') {
            currentErrors.passwordLengthError = 'Please choose a password'
            isValid = false
        }

        if (!email.trim().includes('@')) {
            currentErrors.emailError = 'Enter Valid Email'
            isValid = false
        }

        this.setState({ errors: currentErrors })

        if (isValid) {
            dispatch(registerRequest(username, email, password))
            const registering = store.getState().registerReducer.registering

            if (registering) {// thats if all credentials are valid

                dispatch(registerSuccess(username, email))
                this.setState({ errors: {} })//reseting the errors
                history.push('/verifytwo')
            }
            else {
                dispatch(loginFailure())
            }

        }

    }
    handleSubmit(e) {
        e.preventDefault()
        this.onRegister()
    }
    render() {
        const { email, username, password, confirmedPassword, errors } = this.state

        const defaultClassName = "style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600"

        //className to add red border on inputs
        const errorClassName = "style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600 border-danger"
        return (
            <Fragment>
                <div className="main-wrap min-vh-100">

                    <div className="nav-header bg-transparent shadow-none border-0 position-fixed zindex-900 w-100 p-3 text-center d-lg-block d-none">
                        <a href="/"><img src="assets/images/logo.png" alt="logo" className="w-125" /></a>
                    </div>

                    <div className="row min-vh-100">
                        <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                            <div className="card-body rounded-0 text-start p-3">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-3 white-text text-grey-900">Create <br />your account</h2>
                                <form>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                        <input type="text" className={errors.usernameError ? errorClassName : defaultClassName} placeholder="Your Name" value={username} onChange={(text) => this.usernameChange(text)} />
                                        <span className="fs-5 text-danger" >{errors.usernameError}</span>
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text" className={errors.emailError ? errorClassName : defaultClassName} placeholder="Email Address" value={email} onChange={(text) => this.handleEmailChange(text)} />
                                        <span className="fs-5 text-danger">{errors.emailError}</span>
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <input type="Password" className={errors.passwordLengthError ? errorClassName : defaultClassName} placeholder="Password" value={password} onChange={(text) => this.handlePasswordChange(text)} onFocus={() => (console.log('yoo'))} />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        <span className="fs-5 text-danger">{errors.passwordLengthError}</span>
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input type="Password" className={errors.passwordError ? errorClassName : defaultClassName} placeholder="Confirm Password" value={confirmedPassword} onChange={(text) => this.confirmPassword(text)} />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        <span className="fs-5 text-danger">{errors.passwordError}</span>
                                    </div>
                                    <div className="form-check text-start mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck3" />
                                        <label className="form-check-label font-xssss text-grey-500 white-text" for="exampleCheck3">Accept Term and Conditions</label>

                                    </div>
                                </form>

                                <div className="col-sm-12 p-0 text-start">
                                    <div onClick={this.handleSubmit} className="form-group mb-1"><a href="/registerone" className="text-center font-xsss style2-input text-white fw-600 bg-current border-0 p-0 ">Register</a></div>
                                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32 white-text">Already have account <Link to="logintwo" className="fw-700 ms-1">Login</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {

    return {
        registerState: state.registerReducer
    };
}

export default connect(mapStateToProps)(Registertwo);