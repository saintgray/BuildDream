import { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class NoticeGridView extends Component {
    constructor(props) { super(props); }


    render() {
        const sampleList = [
            {no: '123', name: "rfs"},
            {no: '42', name: "sdf"},
        ]
        return (
            <BootstrapTable data = { sampleList }
            pagination>
                <TableHeaderColumn isKey dataField='no'>No</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>name Name</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}
export default NoticeGridView;