import React, { useState } from 'react'
import BurgerIcon from '../../atoms/BurgerIcon/BurgerIcon.atom'
import Logo from '../../atoms/Logo/Logo.atom'
import Menu from '../../pages/Menu/Menu.page'
import './Header.organism.scss'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="header">
            <Logo inverted={open} />
            <BurgerIcon
                onClick={() => {
                    setOpen(!open)
                }}
                open={open}
                inverted={open}
            />
            <Menu visible={open} close={() => setOpen(false)} />
        </div>
    )
}

export default Header
