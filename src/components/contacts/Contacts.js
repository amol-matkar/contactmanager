import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired,
    //     phone: PropTypes.string.isRequired
    // }
    
    
 
    // onDeleteContact = (id) =>{
    //     // console.log('onDeleteContact'+ id);

    //     const { contacts } = this.state;

    //     const newContacts = contacts.filter((contact) => contact.id !== id)

    //     this.setState({
    //         contacts: newContacts
    //     });
    // }

    render() {

        return (
            <Consumer>
                { value => {
                    const { contacts } = value;
                    return <React.Fragment>
                        <h3 className="display-8 mb-2 text-danger">
                            Contact List
                        </h3>
                        {
                            contacts.map( (contact) => {
                                return <Contact key={contact.id} contact={contact} />
                            } )
                        }
                    </React.Fragment>
                } }
            </Consumer>
        )

    }
}



export default Contacts;