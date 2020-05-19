import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Posts extends Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/posts?_sort=id&_order=desc&_limit=10')
            .then(res => {
                this.setState({ posts: res.data })
            })
    }

    delPost = (id) => {
        axios.delete(`http://localhost:4000/posts/${id}`)
            .then(() => {
                const newState = {
                    posts: this.state.posts.filter(post => post.id !== id)
                }
                this.setState(newState)
            })
    }

    render() {
        console.log(this.props)
        return this.state.posts.map(post => (
            <div key={post.id} style={postItemStytle}>
                <div>
                    <Link to={`/post/${post.id}`}><h3 style={titleStyle}>{post.title}</h3></Link>
                    { post.body.split('\n').slice(0, 2).map((sentence) => <p>{sentence}</p>) }
                </div>
                <button style={btnStyle} onClick={this.delPost.bind(this, post.id)}>Delete</button>
            </div>
        ))
    }
}

const postItemStytle = {
    display: 'flex',
    width: '700px',
    marginTop: '50px',
    paddingBottom: '25px',
    justifyContent: 'space-between',
    color: '#12130F',
    borderWidth: '0 0 1px 0',
    borderStyle: 'solid',
    borderColor: '#EAE6E5'
}

const titleStyle = {
    fontSize: '1.7rem'
}

const btnStyle = {
    border: 'none',
    borderRadius: '15px',
    backgroundColor: '#EB5160',
    color: '#fff',
    margin: '0 0 0 15px',
    padding: '10px 20px',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'flex-end'
}

export default Posts
