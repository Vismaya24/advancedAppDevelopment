import { useState } from 'react'
import '../../../assets/css/login.css';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Login = () => {
 
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };
    const handleSignInClick = () => {
        setIsSignUpMode(false);
    }
    return(
        <>
     <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
            <FaUser className='input-icon' size={25}/>
            <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <RiLockPasswordFill className='input-icon' size={25}/>
              <input type="password" placeholder="Password" />
            </div>
            <Link to="/"><button className='btn'>Login</button></Link>
            {/* <input type="submit" value="Login" className="btn solid" /> */}
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
            <Link to="" className='social-icon'><FaFacebookF /></Link>
            <Link to="" className='social-icon'><FaGoogle /></Link>   
            <Link to="" className='social-icon'><FaXTwitter /></Link>
            <Link to="" className='social-icon'><BsInstagram /></Link>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
            <FaUser className='input-icon' size={25}/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <IoIosMail className='input-icon' size={25}/>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
            <RiLockPasswordFill className='input-icon' size={25}/>
              <input type="password" placeholder="Password" />
            </div>
            <button className="btn" id="sign-in-btn" onClick={handleSignInClick}>Sign Up</button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
            <Link to="" className='social-icon'><FaFacebookF /></Link>
            <Link to="" className='social-icon'><FaGoogle /></Link>   
            <Link to="" className='social-icon'><FaXTwitter /></Link>
            <Link to="" className='social-icon'><BsInstagram /></Link>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Create an account and login
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img1.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account ?</h3>
            <p>
              Click here login directly
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img2.svg" className="image" alt="" />
        </div>
      </div>
    </div>

        </>
    )
}
export default Login;