import { NavLink } from "react-router-dom"


function Navbar() {
    return(
        <>
        <div className="nav">
            <ul>
                <li className="link"><a href="/">Home</a></li>
                <li className="link"><NavLink to='/about'>About</NavLink></li>
                <li className="link"><NavLink to='/head'>Header</NavLink></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar