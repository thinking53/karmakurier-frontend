import React from 'react'
import logo from '../../../assets/logo.svg'
import './Logo.atom.scss'

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="karmakurier logo" />
        </div>
    )
}

export default Logo
