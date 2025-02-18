import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser).user : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      console.log(storedUser)
      if (storedUser) {
        setUser(JSON.parse(storedUser).user);
      } else {
        navigate("/login"); // Redirect to login if no user is found
      }
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <div className="gradient-custom-3">
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            {user ? (
              <>
                <h2>Welcome, {user.name}!</h2>
                <p>Email: {user.email}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
