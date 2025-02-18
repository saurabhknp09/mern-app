import React, { useState, useEffect } from 'react'
import { login } from '../services/authService';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            navigate("/");  // Redirect to home if user is already logged in
        }
    }, [navigate]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(loginData);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        } catch (error) {
            console.error(error.response.data.message);
        }
    };
    return (
        <div className="gradient-custom-3">
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <h2 className="text-uppercase text-center mb-3">Login User</h2>
                                        <form onSubmit={handleLogin}>
                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                <input type="email" name='email' value={loginData.email} onChange={handleChange} id="form3Example3cg" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name='password' value={loginData.password} onChange={handleChange} id="form3Example4cg" className="form-control" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success btn-block gradient-custom-4 text-body">Login</button>
                                            </div>
                                            <p className="text-center text-muted mt-2 mb-0">
                                                Don't have an account? <Link to="/register" className="fw-bold text-body"><u>Register here</u></Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
