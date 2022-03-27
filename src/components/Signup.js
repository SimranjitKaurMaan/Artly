import {Link} from 'react-router-dom';

export const SignUp = () => {
    return (<main>
    <div className="main-section">
        <div className="main-container flex-col-wrap-center">
            <div className="sign-up card-container">
                <div className="input-container flex-col-wrap-center">
                    <h2>Signup</h2>
                    <div className="input-group">
                        <div className="input-label">Email address</div>
                        <input type="text" className="input-field input-field-20w" placeholder="abc@gmail.com"></input>
                    </div>
                    <div className="input-group">
                        <div className="input-label">Password</div>
                        <input type="password" className="input-field input-field-20w" placeholder="************"></input>
                    </div>
                    <div className="input-group">
                        <input type="radio" className="input-field"></input><span className="radio-text">I accept all Terms & Conditions</span>
                    </div>
                    <button className="btn btn-primary">Create New Account</button>
                    <Link to="./login">Already have an account<i className="fa fa-thin fa-chevron-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
  </main>)
}