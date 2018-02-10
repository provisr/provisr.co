import Component from 'inferno-component';
import { Router, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from '../Main';

const browserHistory = createBrowserHistory();

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <IndexRoute component={Main} />
            </Router>
        );
    }
}