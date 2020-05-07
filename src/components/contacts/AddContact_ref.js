import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props){
        super(props);
        
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    static defaultProps = {
        name: "Amol Matkar", 
        email: "amatkarsmailbox@gmail.com", 
        phone: "7558548863"
    }
    

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value, 
            email: this.emailInput.current.value, 
            phone: this.phoneInput.current.value
        }

        console.log(contact)
    }

    render() {
        const { name, email, phone } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                defaultValue={name} 
                                id="name" 
                                type="text" 
                                name="name" 
                                placeholder="Enter name" 
                                className="form-control form-control-lg" 
                                ref={this.nameInput}
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                defaultValue={email} 
                                id="email" 
                                type="email" 
                                name="email" 
                                placeholder="Enter email" 
                                className="form-control form-control-lg" 
                                ref={this.emailInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                defaultValue={phone} 
                                id="phone" 
                                type="text" 
                                name="phone" 
                                placeholder="Enter phone" 
                                className="form-control form-control-lg" 
                                ref={this.phoneInput} />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;
