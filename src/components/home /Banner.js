import {Link} from 'react-router-dom';

export const Banner = () => {
    return <>
    <div className="hero-container">
        <div className="hero-content">
            <h1 className="hero-heading highlight-text">Art Store</h1>
            <h2 className="highlight-text">(n.) transporting souls to a world of creativity</h2>
            <div className="hero-subheading">We house an impressive selection  of fine art to cater to different sensibilities and tastes. Discover our extensive fine art collection by browsing through our different collections below. </div>
            <Link to="/"><button className="btn btn-primary btn-outlined btn-hero">Discover</button></Link>
        </div>
        <img className="img hero-img" src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081719/banner_cswqvh.png"></img>
    </div>
    </>
}