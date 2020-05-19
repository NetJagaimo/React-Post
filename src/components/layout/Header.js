import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props) {
    return (
        <header style={headerStyle}>
            <h2 style={titleStyle}>{props.title}</h2>
            <p style={subtitleStyle}>{props.subtitle}</p>
            <div style={socialStyle}>
                <a style={socialItemStyle} href="https://github.com/sirla-fjulis" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></a>
                <a href="https://www.facebook.com/sirla.fjulis" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></a>
            </div>
        </header>
    )
}

const headerStyle = {
    display: 'flex',
    padding: '0 75px',
    height: '220px',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#444545',
    color: '#fff'
}

const titleStyle = {
    fontSize: '1.9rem'
}

const subtitleStyle = {
    fontSize: '1.3rem'
}

const socialStyle = {
    marginTop: '15px',
}

const socialItemStyle = {
    marginRight: '10px'
}