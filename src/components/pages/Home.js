import React from 'react'
import Posts from '../Posts'
import Header from '../layout/Header'

export default function Home(props) {
    return (
        <div>
            <Header title="FJU Times" subtitle="Your best online news paper" />
            <div className="container">
                <Posts {...props} />
            </div>
        </div>
    )
}
