import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, Card, Button, Input, Icon } from 'antd';
import { addUser, clearUser } from 'actions/user';

const { Footer, Content } = Layout;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

interface Props {
    addUser: any;
    clearUser: any;
    refreshIntervalId: any;
    user: any;
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)),
    clearUser: () => dispatch(clearUser())
});

const mapStateToProps = ({ user }) => ({ user });

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

class Seal extends React.Component<Props> {
    state = {
        running: false,
        target: ['没有人先生'],
        inputValue: ''
    }

    refreshIntervalId = 0

    start = () => {
        this.setState({
            running: true
        })
        let { user } = this.props;
        this.refreshIntervalId = window.setInterval(
            () => {
                this.setState({
                    target: user[getRandom(0, user.length - 1)]
                })
            },
            100
        )
    }

    stop = () => {
        this.setState({
            running: false
        })
        window.clearInterval(this.refreshIntervalId)
    }

    onChangeInput = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addUser = user => {
        this.props.addUser(user);
    }

    clear = () => {
        this.props.clearUser();
    }

    renderUser = (user, index) => {
        return (
            <Card.Grid style={gridStyle} key={index}>
                <p>{user}</p>
            </Card.Grid>
        )
    }

    render() {
        const { user } = this.props;
        const CardTitle = () => (
            <Input.Search
                placeholder="输入参与人列表"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                enterButton="add"
                onSearch={this.addUser}
            />
        )

        return (
            <Layout>
                <Content style={{ padding: '0 50px', marginTop: 64}}>
                    <Card
                        title={<CardTitle/>}
                    >
                        {user.map(this.renderUser)}
                    </Card>
                    <Button onClick={this.clear}>清空列表</Button>
                    { this.state.running
                      ?
                      <Button style={{width: '70%'}} onClick={this.stop}>stop</Button>
                      :
                      <Button style={{width: '70%'}} onClick={this.start}>go</Button>
                    }
                    <div><label>{this.state.target}</label></div>
                </Content>
                <Footer />
            </Layout>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seal);
