import React, { Component } from 'react'
import axios from 'axios'
import Header from './layout/Header'

class PostPage extends Component {
    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        const { params: { postId } } = this.props.match
        axios.get(`http://localhost:4000/posts/${postId}`)
            .then((res) => {
                this.setState({
                    title: res.data.title,
                    body: res.data.body
                })
            })
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.body.split('\n')[0]} />
                <div className="container">
                    <h3 style={titleStyle}>{this.state.title}</h3>
                    { this.state.body.split('\n').map((sentence) => <p>{sentence}</p>) }
                </div>
            </div>
        )
    }
}

const titleStyle = {
    fontSize: '1.7rem',
    marginTop: '50px'
}

export default PostPage
