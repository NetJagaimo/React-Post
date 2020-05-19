import React from 'react'
import Header from '../layout/Header'

export default function About() {
    return (
        <div>
            <Header title="About" subtitle="We are SIRLA!" />
            <div className="container">
                <h3 style={titleStyle}>Who we are?</h3>
                <p>I'm fine!</p>
                <p>Thank you!</p>
                <p>And you?</p>

                <h3 style={titleStyle}>What we do?</h3>
                <p>Coding! Coding! Codingggg!!</p>

                <h3 style={titleStyle}>Where are we?</h3>
                <p>In you heart!</p>
            </div>
        </div>
    )
}

const titleStyle = {
    fontSize: '1.7rem',
    marginTop: '50px'
}
