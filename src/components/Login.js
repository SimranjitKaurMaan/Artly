import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { loginUser } from "./utils/requestUtils/AuthRequestUtils";

export const Login = () => {
    const [userData , setUserData] = useState({email: '',password: ''});
    const navigate = useNavigate();
    const loginHandler =  async (event) => {
        event.preventDefault();
        const response = await loginUser(userData);
        if(response && response.encodedToken){
            navigate('/');
        } else{
            console.error(response.errors[0]);
        }
    }
    return (<>
        <main>
            <div className="main-section">
                <div className="main-container flex-col-wrap-center">
                    <div className="login card-container">
                        <div className="input-container flex-col-wrap-center">
                            <h2>Login</h2>
                            <div className="input-group">
                                <div className="input-label">Email address</div>
                                <input type="text" className="input-field input-field-20w" placeholder="ram.manohar@gmail.com" onChange={(event) => setUserData({...userData, email: event.target.value})}></input>
                            </div>
                            <div className="input-group">
                                <div className="input-label">Password</div>
                                <input type="password" className="input-field input-field-20w" placeholder="************" onChange={(event) => setUserData({...userData, password: event.target.value})}></input>
                            </div>
                            <div className="input-group">
                                <input type="checkbox" className="input-field"></input><span className="radio-text">Remember me</span>
                                <button className="btn-link btn-forgot-password">Forgot your password?</button>
                            </div>
                            <button className="btn btn-primary btn-login" onClick={loginHandler}>Login</button>
                            <Link to="/signup">Don't have an account<i className="fa fa-thin fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>)}