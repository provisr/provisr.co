import Component from 'inferno-component';
import { connect } from 'inferno-mobx';

class Main extends Component {
    render({ appStore }) {
        return (
            <div>
                <h1>{appStore.title}</h1>
            </div>
        );
    }
}

export default connect(['appStore'])(Main);