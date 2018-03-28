import * as React from 'react';
import { connect } from 'react-redux';

import { Button, Form, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { login } from 'actions';
import { LOGIN_FORM } from 'config/rules';

interface LoginFormProps extends FormComponentProps {
    onSubmit: (value: any) => any;
    configs: ReadonlyArray<any>;
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (value) => dispatch(login(value))
})

const mapStateToProps = ({ user }) => ({
    user,
    configs: LOGIN_FORM
});

class LoginForm extends React.Component<LoginFormProps, any> {
    onSubmit = (e) => {
        let { form: { validateFields }, onSubmit } = this.props;
        validateFields((err, value) => err ? null : onSubmit(value))
    }

    parseConfig = ({ id, rules, inputType, icon, placeholder }) => {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form.Item key={id}>
                {getFieldDecorator(id, {
                     rules: rules,
                })(
                     <Input
                         id={id}
                         type={inputType}
                         prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                         placeholder={placeholder} />
                 )}
            </Form.Item>
        )
    }

    render() {
        let { configs } = this.props;
        return (
            <Form>
                {configs.map( config => this.parseConfig(config))}
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onSubmit}>
                    Log in
                </Button>
            </Form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginForm));
