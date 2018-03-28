import * as React from 'react';
import { connect } from 'react-redux';
import {
    Banner,
    LoginForm
} from 'components';
import { BANNER_IMAGES } from 'config';

interface Props {
    user: any;
}
const mapDispatchToProps = () => ({});
const mapStateToProps = ({ user }) => ({ user });

class Home extends React.Component<Props, {}> {
    render() {
        let { user } = this.props;
        console.log(user)
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 1200}}>
                <h2>Home</h2>
                {user.id ? <Banner images={BANNER_IMAGES} /> : <LoginForm />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
