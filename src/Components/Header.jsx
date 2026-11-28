import Button from './Button'
import './Header.css'
import { useState } from 'react'

function Header(){

    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [deepOpen, setDeepOpen] = useState(false)

    return(
        <>
        <div className="header">
            <div className="nav1">
                <h1>QUIZGAME</h1>
            </div>

            {menuOpen && (
                <div
                    className='menu-overlay'
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            <div className={menuOpen ? "nav2 active" : "nav2"}>
                <ul>
                    <a href="#" className='home-link'>Home</a>
                    <a href="#">About</a>
                    <a href="#">Courses</a>
                    <a href="#">Trainers</a>
                    <a href="#">Pricing</a>
                    <li className='dropdown'>
                        <button
                            type='button'
                            className='dropdown-toggle'
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            
                        >
                            Dropdown ⌄
                        </button>

                        <ul className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}> 
                            <li><a href="#">Dropdown 1</a></li>
                            <li className='"deep-dropdown'>
                                <button
                                    className='"dropdown-toggle'
                                    onClick={() => setDeepOpen(!deepOpen)}
                                    aria-expanded={deepOpen}
                                >
                                    Deep Dropdown
                                </button>

                                <ul className={deepOpen ? "deep-menu show" : "deep-menu"}>
                                    <li><a href="#">Deep Dropdown 1</a></li>
                                    <li><a href="#">Deep Dropdown 2</a></li>
                                    <li><a href="#">Deep Dropdown 3</a></li>
                                    <li><a href="#">Deep Dropdown 4</a></li>
                                    <li><a href="#">Deep Dropdown 5</a></li>

                                </ul>
                            </li>

                            <li><a href="#">Dropdown 2</a></li>
                            <li><a href="#">Dropdown 3</a></li>
                            <li><a href="#">Dropdown 4</a></li>
                        </ul>
                        </li>
                    <a href="#">Contact</a>
                </ul>
                </div>

                <div className="nav3">

                    <Button text="Get Started"/>

                    <button 
                        className={menuOpen ? "menu-icon opened" : "menu-icon"}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                     >    
                        {menuOpen ? '✕' : '☰'}
                     </button>

                </div>

            
        </div>
        </>
    )
}

export default Header


