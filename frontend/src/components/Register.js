import React, { useState } from 'react'
import { register } from '../services/authService';
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [status, setStatus] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            setStatus(response.data.message);
            setFormData({ name: "", email: "", password: "" });
            Navigate("/login")
        } catch (error) {
            console.log("Error submitting form:", error.response ? error.response.data : error.message);
            setStatus("Error submitting form");
        }
    }
    return (
        <div className="gradient-custom-3">
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <h2 className="text-uppercase text-center mb-3">Register User</h2>
                                        <form onSubmit={handleRegister}>
                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                                <input type="text" name='name' value={formData.name} onChange={handleChange} id="form3Example1cg" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                <input type="email" name='email' value={formData.email} onChange={handleChange} id="form3Example3cg" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name='password' value={formData.password} onChange={handleChange} id="form3Example4cg" className="form-control" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success btn-block gradient-custom-4 text-body">Register</button>
                                            </div>
                                            <p className="text-center text-muted mt-2 mb-0">
                                                Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
                                            </p>
                                        </form>
                                        <p>{status}</p>
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

export default Register
