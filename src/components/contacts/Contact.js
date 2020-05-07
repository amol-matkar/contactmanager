import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {

    state = {
        showContactInfo: false
    }

    onShowClick = (event) => {
        console.log(this.state)
        const { showContactInfo } = this.state;

        this.setState({
            showContactInfo: !showContactInfo
        })
    }

    onDeleteClicHander = async (id, dispatch) => {
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type: 'DELETE_CONTACT', payload: id})
        }
        catch(e){
            console.log(e);
        }
        
    }
    
    render(){
        const { id, name, email, phone } = this.props.contact;

        let contactinfo = null;
        if(this.state.showContactInfo){
            contactinfo = (
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>  
            )
        }

        
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;

                        return (
                            <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <i className="fas fa-sort-down" style={{cursor: 'pointer'}} onClick={this.onShowClick} />
                                <i className="fas fa-times" style={{cursor: 'pointer', float: "right", color: "red"}} onClick={this.onDeleteClicHander.bind(this, id, dispatch)} />
                                <Link to={`/contact/edit/${id}`}>
                                    <i className="fas fa-pencil-alt" style={{cursor: 'pointer', float: "right", color: "black", marginRight: '15px'}} />
                                </Link>
                                
                            </h4>
                            { contactinfo }
                        </div>
                        )
                        
                    }
                }
            </Consumer>
            
        )
    }
    
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;