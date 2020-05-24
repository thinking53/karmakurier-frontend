import React from 'react'
import Logo from '../../atoms/Logo/Logo.atom'
import './Menu.page.scss'

const Menu = ({ visible, close }) => {
    return (
        <div className={visible ? 'menu visible' : 'menu'}>
            <div className="header">
                <Logo inverted={visible} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <button type="button" onClick={close}>
                            Über uns
                        </button>
                    </li>
                    <li>Unsere Unterstützer</li>
                    <li>Häufig gestellte Fragen</li>
                    <li>Schreib uns</li>
                    <button type="button">Auftrag aufgeben</button>
                    <button type="button">Auftrag finden</button>
                </ul>
            </div>
        </div>
    )
}

export default Menu
