import { Component } from 'react';
import { observable } from "mobx";
import NoticeGridView from './../view/NoticeGridView';

class NoticeContainer extends Component {



    render() {
        return(
            <NoticeGridView />
        );
    }
}
export default NoticeContainer;