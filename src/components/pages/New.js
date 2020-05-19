import React, { Component } from 'react'
import axios from 'axios'

class New extends Component {
    state = {
        title: '',
        body: ''
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })   
    }

    onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/posts', {
            title: this.state.title,
            body: this.state.body
        }).then(res => {
            console.log(res.data)
            this.setState({
                title: '',
                body: ''
            })
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} style={formStyle}>
                    <label style={labelStyle}>Title</label>
                    <input 
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                    />
                    <label style={labelStyle}>Content</label>
                    <textarea                
                        rows="20"
                        columns="50"
                        name="body"
                        onChange={this.onChange}
                        value={this.state.body}
                    />
                    <input type="submit" value="Submit" style={btnStyle} />
                </form>
            </div>
        )
    }
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '550px',
    marginTop: '30px'
}

const labelStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '20px'
}

const btnStyle = {
    border: 'none',
    borderRadius: '15px',
    backgroundColor: '#8F8073',
    color: '#fff',
    margin: '20px 0 0 0',
    padding: '10px 20px',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'flex-start'
}

export default New
