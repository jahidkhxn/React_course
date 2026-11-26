import './Button.css'


function Button({bgcolor,setX,x,text,status}){

    return(
        <>
        <button style={{backgroundColor:bgcolor}}  onClick={()=> status?setX(x++):setX(x--)}>{text}{x}</button>
        </>
    )
}

export default Button