import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getDestinationById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Destination Details</h3>
                    <div className = "card-body">

                        <div className = "row">
                            <label> Destination Name: </label>
                            <div> { this.state.employee.title }</div>
                        </div>
                        <div className = "row">
                            <label> Destination Description: </label>
                            <p>{ this.state.employee.titledes }</p>
                        </div>
                        <div className = "row">
                            <label> Destination Image: </label>
                            <div> <img src={ this.state.employee.img }alt="" width="200"/></div>
                        </div>
<div className = "row">
                            <label> Destination Time: </label>
                            <div> { this.state.employee.details }</div>
                        </div>
                        <div className = "row">
                            <label> Destination Kms: </label>
                            <div> { this.state.employee.kms }</div>
                        </div>
                        <div className = "row">
                            <label> Destination Price: </label>
                            <div> { this.state.employee.price }</div>
                        </div>
                        


                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
