import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Halloween_SIRLA_LOGO_300.png'

export default function Navbar() {
    return (
        <nav style={navStyle}>
            <Link to="/"><img src={logo} style={logoStyle} alt="logo"></img></Link>
            <Link to="/"><h1 style={brandStyle}>FJU Times</h1></Link>
            <NavLink exact to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/new" className="nav-link">New</NavLink>
        </nav>
    )
}

const logoStyle = {
    width: '40px',
}

const brandStyle = {
    margin: '0 30px 0 20px'
}

const navStyle = {
    display: 'flex',
    height: '70px',
    padding: '0 15px',
    backgroundColor: '#8F8073',
    alignItems: 'center',
    color: '#fff'
}