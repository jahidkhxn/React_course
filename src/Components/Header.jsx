import Button from './Button'
import './Header.css'
import { useState } from 'react'

function Header(){

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
        <div className="header">
            <div className="nav1">
                <h1>QUIZGAME</h1>
            </div>

            <button 
                className='menu-icon'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Toggle navigation'
                aria-expanded={menuOpen}
            >    
                {menuOpen ? '✕' : '☰'}
            </button>

            <div className={`nav2 ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Courses</a>
                    <a href="#">Trainers</a>
                    <a href="#">Pricing</a>
                    <a href="#">Dropdown</a>
                    <a href="#">Contact</a>
                </ul>

                <Button text="Get Started"/>

            </div>
        </div>
        </>
    )
}

export default Header


