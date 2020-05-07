import React, { Component } from 'react'

class Test extends Component {

    state = {
        title: ''
    };

    componentDidMount(){
               

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    body: data.body
                })
            })
    }
    render() {
        const { title, body } = this.state;

        return (
            <div className="card card-body">
                
                <h1>{title}</h1>
                <div className="card-body">
                    {body}                    
                </div>
            </div>
        )
    }
}

export default Test;