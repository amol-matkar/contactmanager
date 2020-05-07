import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputgroup from "../layout/TextInputgroup";
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors:{}
    }

    onChange = (event) => this.setState({[event.target.name]: event.target.value})

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        console.log(this.state)
        const { name, email, phone } = this.state;

        if(name === ''){
            this.setState({errors: {name: 'Name is required'}});
            return;
        }

        if(email === ''){
            this.setState({errors: {email: 'Email is required'}});
            return;
        }

        if(phone === ''){
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }

        const { id } = this.props.match.params;

        // Create a contact object
        const updateContact = {
            name: name,
            email: email,
            phone: phone
        }

        

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
        console.log(res.data)
        dispatch({type: 'UPDATE_CONTACT', payload: res.data});
        // return;

        // Clear state after submitting form
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });
        
        this.props.history.push('/');
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            errors: {}
        });
    }

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="card mb-3">
                                <div className="card-header">Update Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                        <TextInputgroup 
                                            label="Name" 
                                            value={name} 
                                            name="name" 
                                            placeholder="Enter name" 
                                            onChange={this.onChange} 
                                            error= {errors.name}
                                        />

                                        <TextInputgroup 
                                            label="Email"  
                                            value={email} 
                                            name="email" 
                                            type="email"
                                            placeholder="Enter email" 
                                            onChange={this.onChange} 
                                            error= {errors.email}
                                        />

                                        <TextInputgroup 
                                            label="Phone"  
                                            value={phone} 
                                            name="phone" 
                                            placeholder="Enter phone" 
                                            onChange={this.onChange} 
                                            error= {errors.phone}
                                        />
                                        {/* <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input 
                                                value={name} 
                                                id="name" 
                                                type="text" 
                                                name="name" 
                                                placeholder="Enter name" 
                                                className="form-control form-control-lg" 
                                                onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input 
                                                value={email} 
                                                id="email" 
                                                type="email" 
                                                name="email" 
                                                placeholder="Enter email" 
                                                className="form-control form-control-lg" 
                                                onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input 
                                                value={phone} 
                                                id="phone" 
                                                type="text" 
                                                name="phone" 
                                                placeholder="Enter phone" 
                                                className="form-control form-control-lg" 
                                                onChange={this.onChange} />
                                        </div> */}
                                        <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )

        
    }
}

export default EditContact;
