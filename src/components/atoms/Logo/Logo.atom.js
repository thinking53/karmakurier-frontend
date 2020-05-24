import React from 'react'
import logoInverted from '../../../assets/logo-inverted.svg'
import logo from '../../../assets/logo.svg'
import './Logo.atom.scss'

function Logo({ inverted }) {
    return (
        <div className="logo">
            <img src={inverted ? logoInverted : logo} alt="karmakurier logo" />
        </div>
    )
}

export default Logo
