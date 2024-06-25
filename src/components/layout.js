import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Margin } from "@mui/icons-material";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/logo.png" alt="Logo" width="30" className="me-2" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    
                    <li className="d-flex nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/admin/products">Products</Link></li>
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                            </ul>
                        </li>
                </div>
            </div>
        </nav>
    );
}

export function Footer() {
    return (
        <footer className="bg-dark text-white pt-4">
            <div className="container text-center text-md-start">
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">N.A.Kale</h6>
                        <p>
                            Providing the finest perfumes for discerning customers.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <p><Link to="/products/new" className="text-reset">New Arrivals</Link></p>
                        <p><Link to="/products/popular" className="text-reset">Popular</Link></p>
                        <p><Link to="/products/sale" className="text-reset">Sale</Link></p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Useful Links</h6>
                        <p><Link to="/profile" className="text-reset">Your Account</Link></p>
                        <p><Link to="/orders" className="text-reset">Orders</Link></p>
                        <p><Link to="/help" className="text-reset">Help</Link></p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <p><i className="fas fa-home me-3"></i> 123 Perfume St, Fragrance City, CA 12345</p>
                        <p><i className="fas fa-envelope me-3"></i> info@nakale.com</p>
                        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 border-top">
                <a href="https://www.instagram.com" className="text-white me-4 social-icon"><FaInstagram /></a>
                <a href="https://www.linkedin.com" className="text-white me-4 social-icon"><FaLinkedin /></a>
                <a href="mailto:info@nakale.com" className="text-white me-4 social-icon"><FaEnvelope /></a>
                <p className="mt-3">© 2024 N.A.Kale</p>
            </div>
        </footer>
    );
}