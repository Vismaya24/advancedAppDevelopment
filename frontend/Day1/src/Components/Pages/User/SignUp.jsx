import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <>
        <section className="section1">
        <div className="login-flex">
            <div>
            <h1 style={{color: "white", fontFamily: "Calibri"}}>SIGN UP</h1>
            <input className="login-input" placeholder='Name'/><br/>
            <input className="login-input" placeholder='Mobile Number'/><br/>
            <input className="login-input" placeholder='Username'/><br/>
            <input className="login-input" placeholder='Password'/><br/>
            <Link to="/login"><button className='login-button'>SIGN UP</button></Link>
            </div>
        </div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
    </section>
        </>
    )
}
export default SignUp;