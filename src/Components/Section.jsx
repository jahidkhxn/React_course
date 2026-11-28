import Button from './Button'
import './Section.css'

function Section(){
    return(
        <>

        <div className="hero">

            <img src="hero.jpg" alt="" /> 

            <div className="hero-content">
                <h1>
                    Learning Today, <br />
                    Leading Tomorrow
                </h1>

                <p>
                    Learn new skills and build your future with us.
                </p>

                <Button text={'Get Started'}/>
            </div>
        </div>
        
        </>
    )
}

export default Section