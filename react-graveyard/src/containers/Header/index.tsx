import * as React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { logout } from 'actions/user';
import { HEAD_LINK } from 'config/index';
const { Header } = Layout;

interface Props extends RouteComponentProps<any> {
    user: any;
    logout: () => any;
}
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = ({ user }) => ({ user });

class SealHeader extends React.Component<Props, {}> {
    render() {
        let { match, user } = this.props;
        return (
            <Header style={{ position: 'fixed', width: '100%' }}>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    defaultSelectedKeys={['0']}>
                    <Menu.Item key="0"><Link to={`${match.url}`}>tab1</Link></Menu.Item>
                    <Menu.Item><Link to={`${match.url}/tab2`}>tab2</Link></Menu.Item>
                    <Menu.Item><Link to={`${match.url}/tab3`}>tab3</Link></Menu.Item>
                    <Menu.Item><Link to={`${match.url}/tab4`}>tab4</Link></Menu.Item>
                    {(() => {
                         if (user.id) {
                             return <Menu.Item><span onClick={() => this.props.logout()}>logout</span></Menu.Item>
                         }
                         return
                    })()}
                    <Menu.Item><Link to={HEAD_LINK} target="_blank">out click</Link></Menu.Item>
                </Menu>
            </Header>
        )}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SealHeader))
