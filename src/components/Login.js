import { Link } from "react-router-dom"
import { HeaderNavBar } from "./customComponents/HeaderNavBar"

export const Login = () => {
    return (<>
        <HeaderNavBar/>
        <main>
            <div className="main-section">
                <div className="main-container flex-col-wrap-center">
                    <div className="login card-container">
                        <div className="input-container flex-col-wrap-center">
                            <h2>Login</h2>
                            <div className="input-group">
                                <div className="input-label">Email address</div>
                                <input type="text" className="input-field input-field-20w" placeholder="ram.manohar@gmail.com"></input>
                            </div>
                            <div className="input-group">
                                <div className="input-label">Password</div>
                                <input type="password" className="input-field input-field-20w" placeholder="************"></input>
                            </div>
                            <div className="input-group">
                                <input type="checkbox" className="input-field"></input><span className="radio-text">Remember me</span>
                                <button className="btn-link btn-forgot-password">Forgot your password?</button>
                            </div>
                            <button className="btn btn-primary btn-login">Login</button>
                            <Link to="/signup">Don't have an account<i className="fa fa-thin fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>)}