"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var SignUpStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 600px;\n  background-color: lightblue;\n  input {\n    width: 300px;\n    padding: 3px;\n    margin: 3px;\n  }\n  a {\n    cursor: pointer;\n    color: blue;\n  }\n"], ["\n  max-width: 600px;\n  background-color: lightblue;\n  input {\n    width: 300px;\n    padding: 3px;\n    margin: 3px;\n  }\n  a {\n    cursor: pointer;\n    color: blue;\n  }\n"])));
var SignUp = function (_a) {
    var className = _a.className, history = _a.history;
    var _b = react_1.useState('signup'), screen = _b[0], setScreen = _b[1];
    var _c = react_1.useState(''), name = _c[0], setName = _c[1];
    var _d = react_1.useState(''), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(''), password = _e[0], setPassword = _e[1];
    var _f = react_1.useState(''), error = _f[0], setError = _f[1];
    var handleNameChange = function (e) { return setName(e.target.value); };
    var handleEmailChange = function (e) { return setEmail(e.target.value); };
    var handlePasswordChange = function (e) { return setPassword(e.target.value); };
    var displayErrorMessage = function (status) {
        switch (status) {
            case 404:
                setError('No matching user exists.');
                break;
            case 401:
                setError('Validation failed.');
                break;
            case 400:
                setError('User already exists');
                break;
            default:
                setError('Validation failed.');
                break;
        }
    };
    var handleSignup = function () {
        fetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
            if (response.status === 200)
                history.push('/home');
            else
                displayErrorMessage(response.status);
        })
            .catch(function (err) { return console.error(err); });
    };
    var handleLogin = function () {
        fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
            if (response.status === 200)
                history.push('/home');
            else
                displayErrorMessage(response.status);
        });
    };
    return (<SignUpStyle>
      <h1>Welcome to Stream!</h1>
      {screen === 'signup' &&
        <>
          <label>Name</label> <input value={name} onChange={handleNameChange}/>
        </>}
      <br />
      <label>Email</label><input value={email} onChange={handleEmailChange}/>
      <br />
      <label>Password</label><input value={password} onChange={handlePasswordChange}/>
      <br />
      <input type="button" value={screen === 'signup' ? 'Signup' : 'Login'} onClick={screen === 'signup' ? handleSignup : handleLogin}/>
      <br />
      <span>{error !== '' && error}</span>
      <br />
      {screen === 'signup' && <a onClick={function () { return setScreen('login'); }}>I already have an account</a>}
      {screen === 'login' && <a onClick={function () { return setScreen('signup'); }}>Make an account</a>}
    </SignUpStyle>);
};
exports.default = SignUp;
var templateObject_1;
//# sourceMappingURL=SignUp.js.map