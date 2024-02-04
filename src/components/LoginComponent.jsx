import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import axios from 'axios';
class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            
            emailId: '',
            password: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_login'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState(
	{
		
                    emailId : employee.emailId,
                    password : employee.password,
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {emailId: this.state.emailId,password: this.state.password};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
         axios.post('http://localhost/login/',employee)
    .then(res=> alert(res.data))
    .catch(error => {
      console.log(error.response)
  });
 
           
        }
    
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    
changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
     changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_login'){
            return <h3 className="text-center">Login</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                       
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                               value={this.state.emailId} onChange={this.changeEmailHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label>Password: </label>
                                            <input type="password" placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent
