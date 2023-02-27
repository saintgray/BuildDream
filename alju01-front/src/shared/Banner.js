import {Component} from "react";

class Banner extends Component {
    constructor(props) { super(props); }
    render() {
        const { title, align } = this.props;
        return(
            <div className={'banner ' + (!align ? 'text-center' : 'right' === align ? 'text-start' : 'text-end')}>
                { title }
            </div>
        );
    }
}
export default Banner