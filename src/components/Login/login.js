
import React, { Component } from 'react';
import './login.css';
import { Button, Form, FormGroup, FormControl, InputGroup, Image } from 'react-bootstrap';
class Login extends Component {

  state = {
    username: '',
    password: '',
    errorMsg: '',
    unauth: false,
    serviceFailed: false,


  }

  setTextField = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  componentDidMount() {
    let that = this;
    document.getElementById('userId').onkeydown = (e) => {
      if (e.keyCode == 13) {
        that.loginAction();
      }
      else
        that.setState({ unauth: false })
    };
    document.getElementById('passWord').onkeydown = (e) => {
      if (e.keyCode == 13) {
        that.loginAction();
      }
      else
        that.setState({ unauth: false })
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loginFailed) {
      this.setState({ unauth: true });
      document.getElementById('loadingIndicatorMain').style.display = 'none';
    }
    if (newProps.serviceFailed)
      this.setState({ serviceFailed: true });
    document.getElementById('loadingIndicatorMain').style.display = 'none';
  }

  getErrorMessage = () => {
    let userName = document.getElementById('userId').value;
    let passWord = document.getElementById('passWord').value;
    let errorMsg = '';
    if (userName === '' && passWord === '') {
      errorMsg = "Username and Password cannot be empty!"
    } else if (userName === '' || passWord === '') {
      if (userName === '') {
        errorMsg = "Username cannot be empty!"
      }
      else {
        errorMsg = "Password cannot be empty!"
      }
    }
    return errorMsg;
  }

  loginAction = () => {
    this.setState({ errorMsg: "" })
    let userName = document.getElementById('userId').value;
    let passWord = document.getElementById('passWord').value;
    let errorMsg = '';
    errorMsg = this.getErrorMessage();
    this.setState({ errorMsg: errorMsg });
    if (errorMsg.length === 0) {
      document.getElementById('loadingIndicatorMain').style.display = 'flex';
      this.props.login(userName, passWord);
    }

  }
  backAction = () => {
    this.props.back();
  }

  render() {

    let errorDiv = null;
    if (this.state.errorMsg.length > 0)
      errorDiv = (<div className="errorMsg">{this.state.errorMsg}</div>);

    if (this.state.loginFail)
      errorDiv = (<div className="errorMsg">Username or Password is incorrect. Please try again!</div>);
    else if (this.state.unauth)
      errorDiv = (<div className="errorMsg">You are not authorized. Please try again!</div>);
    else if (this.state.serviceFailed)
      errorDiv = (<div className="errorMsg">"Network Error.Please Try again after some time!!"</div>);

    //inline style
    const style = {
      backgroundColor: 'yellow',
      border: '1px solid blue',
      position: 'relative',
      border: '2px solid #cdcdcd',
      borderColor: 'rgba(0,0,0,.14)',
      backgroundColor: 'AliceBlue',
      fontSize: '14px',
      height: '25px',
      marginTop: '10px',

    };



    return (
      <div>
        <div className="loginBody">
          <div className="container">
            <div className="spanT">&nbsp;Company Login </div>
            <div className="loginCard">
              {errorDiv}
              <div className="inputsSection">
                <Form id="loginForm">
                  <FormGroup>
                    <InputGroup className="greenMargin">
                      <InputGroup.Addon className="inputImage"><span className="glyphicon glyphicon-user whiteIcon"></span></InputGroup.Addon>
                      <FormControl id="userId" className="username" type="text" placeholder="Username" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="greenMargin">
                      <InputGroup.Addon className="inputImage"><span className="glyphicon glyphicon-lock whiteIcon"></span></InputGroup.Addon>
                      <FormControl id="passWord" className="password" type="password" placeholder="Password" />
                    </InputGroup>
                  </FormGroup>
                  <div >
                    <Button id="loginButton" className="loginButton" onClick={this.loginAction}>LOGIN</Button>
                    {/*<Button id="backButton" className="loginButton" onClick={this.backAction}>LOGIN</Button>*/}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login