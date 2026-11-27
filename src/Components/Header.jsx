import './Header.css'

function Header(){
    return(
        <>
        <div className="header">
            <div className="nav">
                <h1>QUIZGAME</h1>
            </div>
            <div className="nav2">
                <ul>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Courses</a>
                    <a href="#">Trainers</a>
                    <a href="#">Pricing</a>
                    <a href="#">Dropdown</a>
                    <a href="#">Contact</a>
                </ul>
                <button>Get Started</button>
            </div>
        </div>
        </>
    )
}

export default Header


