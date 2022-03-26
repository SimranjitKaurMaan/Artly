export const Footer = () => {
    return <><footer className="footer-container">
    <div className="footer-content flex-row-wrap-space-around">
        <div className="logo-container footer-logo">
            <a href="./index.html">
                <h1>Artly<span className="logo-text">Store</span>
                </h1>
            </a>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Location</h2>
            <div>121 14241 NE</div>
            <div>Windoville Road, 90072</div>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Get in touch</h2>
            <div>info@artstore</div>
            <div>simranjitk@gmail.com</div>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Company</h2>
            <a href="#">Terms and conditions</a>
            <a href="#">Privacy policy</a>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Follow us</h2>
            <div className="flex-row-wrap-space-around">
            <a target="_blank" href="https://github.com/SimranjitKaurMaan">
                <i className="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://in.linkedin.com/in/simranjitkaurmec">
                <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://twitter.com/Simranjit1994">
                <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
            </div>
        </div>
    </div>
</footer></>
}