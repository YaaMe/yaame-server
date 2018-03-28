import * as React from 'react';
// import { Link, Route } from 'react-router-dom';
import { LoginForm } from 'components';


export default class Login extends React.Component {
    render() {
        console.log(LoginForm)
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}


