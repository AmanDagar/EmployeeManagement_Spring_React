import React, { Component } from 'react';
import {useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export function withRouter(Children){
    return(props) =>{
        const match = {params: useParams()};
        return <Children {...props} match={match} />
    }
}

class DeleteEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id
        }
    }
    componentDidMount(){
        EmployeeService.deleteEmployeeById(this.state.id).then((res) => {
            console.log('deleted employee -> ' + JSON.stringify(res.data));
            window.location.href = '/employees';
        });
    }
    render() {
        return (
            <div>
                Deleting the record....
            </div>
        );
    }
}

export default withRouter(DeleteEmployeeComponent);